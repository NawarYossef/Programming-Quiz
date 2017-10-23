/* global $ */
"use strict";
const javascriptFundementals = require('./js-fundementals-quiz.js');
const advancedJavascript = require('./js-advanced.js');
const _ = require('lodash');

class QuizApp {
	constructor() {
	 this.state = '';
	 this.userChoiceIdx = '';
	 this.index = 1;
	}

	whichQuiz() {
		let that = this;
		$(".quiz-btn").click(function() {
			if($(this).text() === "JavaScript-Fundemental") {
				that.state = javascriptFundementals;
			} else if ($(this).text() === "JavaScript-Advanced Topics") {
				that.state = advancedJavascript;
			}
		})
	}

	hideQuiz() {
		$(".questions, .correct-ans, .wrong-ans, .count, .final-score, .results").hide();
	}

	renderQuizMarkup() {
		$(".quiz-btn").click(function() {
			$("main").hide()
			$(".questions, .count").fadeIn(200)	
		})
	}

	renderMainPageMarkUp() {
		$("main").fadeIn(200).show()
	}

	mainPageStyleRender() {
		$('link[href="stylesheets/style2.css"]').attr({'href' : "stylesheets/style1.css"})
	}

	quizStyleRender() {
		$(".quiz-btn").click(function() {
			$('link[href="stylesheets/style1.css"]').attr({'href' : "stylesheets/style2.css"})
		})
	}
	
	questionCount() {
		let range = Object.keys(this.state).length;
		$(".question-count").text(`${this.index}/${range}`);
		
		//hide next question if it's the last question on the quiz
		this.hideNextQuesButton();
	}
	

	displayFirstQuestion() {
		$(".quiz-btn").click(() => {
			// show question count
			this.questionCount();

			$("h3").text(this.state[this.index]["question"])

			let context = this;
			$(".answer").each(function(idx, ele) {
				$(this).text(context.state[context.index]["answers"][idx])
			})
		})
	}

	getUserChoiceAndShowResult() {
		$(".option").click((e) => {
			// collect user choice
			this.userChoiceIdx = $(e.currentTarget).find("input").attr("id")

			// hide multiple choices in order to display result only
			this.formHide();

			// show result based on user choice collected
			this.showResult();

			//allow user to go to next question
			this.enableNextButton();
		})
		
	}

	// if function returns true, then user made the right choice. 
	userMadeRightChoice() {
		return Number(this.userChoiceIdx) === this.state[this.index]["correctAnswer"];
	}

	formHide() {
		$("form").fadeOut(500).hide();
	}

	showForm() {
		$("form").fadeIn(300).show();
	}

	hideQuestion() {
		$("h3").hide();
	}

	showQuestion() {
		$("h3").show()
	}
	wrongAnsText() {
		let pos = this.state[this.index]["correctAnswer"] - 1
		let text = $(`<p class="corr-ans-display">${this.state[this.index]["answers"][pos]}</p>`)
		$(".wrong-ans").append(text);
	}

	showResult() {
		if (this.userMadeRightChoice()) {
			$(".correct-ans").fadeIn(200)
			// hide question
			this.hideQuestion()
		} else if (this.userMadeRightChoice() === false) {
			this.wrongAnsText()
			$(".wrong-ans").fadeIn(200)
		}

		this.renderResultsButton()
	}

	hideStats() {
		$(".correct-ans").hide();
		$(".wrong-ans").hide();
		$(".corr-ans-display").remove();
	}

	enableNextButton() {
		$(".next-q").prop('disabled', false);
	}

	disableNextButton() {
		$(".next-q").prop('disabled', true);
	}
	
	updateStateForNextQuestion() {
		this.showQuestion();
		this.questionCount();
		this.hideStats();
		this.showForm();
		this.disableNextButton();
	}

	renderNextQuestion() {
		$(".next-q" ).click(() => {
			this.index += 1;
			this.updateStateForNextQuestion()

			$("h3").text(this.state[this.index]["question"]);

			let that = this;
			$(".answer").each(function(idx, ele) {
				$(this).text(that.state[that.index]["answers"][idx]);
			})
		})	
	}
	
	//hide next question if it's the last question on the quiz
	hideNextQuesButton() {
		let range = Object.keys(this.state).length
		this.index === range ? $(".next-q").hide() : null;
	}
	
	mainPageHeaderShow() {
		$("h2").show();
	}

	emptyQuestion() {
		$("h3").empty();
	}
	
	backToMainDefaultState() {
		$(".back-to-main").click(() => {
			this.state = '';
			this.userChoiceIdx = '';
			this.index = 1;
			this.hideQuiz();
			this.mainPageStyleRender();
			this.renderMainPageMarkUp();
			this.mainPageHeaderShow();
			this.emptyQuestion();
		})
	}
	

	renderResultsButton() {
		let range = Object.keys(this.state).length
		this.index === range ? $(".results").show() : null;
	}

	// shuffle questions
	// show final result
	init() {
		this.hideQuiz();
		this.whichQuiz();
		this.renderQuizMarkup();
		this.quizStyleRender();
		this.questionCount();
		this.displayFirstQuestion();
		this.getUserChoiceAndShowResult();
		this.renderNextQuestion();
		this.backToMainDefaultState();
	}
}

var app = new QuizApp()
app.init()



			
		
	


