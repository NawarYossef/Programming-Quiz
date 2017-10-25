/* global $ */
"use strict";
const javascriptFundementals = require('./js-fundementals-quiz.js');
const advancedJavascript = require('./js-advanced.js');
const htmlCss = require('./html-css-quiz.js');
const _ = require('lodash');

class QuizApp {
	constructor() {
	 this.state = '';
	 this.userChoiceIdx = '';
	 this.index = 1;
	 this.allCorrectAns = 0
	 this.allWrongAns = 0
	}

	whichQuiz() {
		let that = this;
		$(".quiz-btn").click(function() {
			if($(this).text() === "JavaScript-Fundemental") {
				that.state = javascriptFundementals;
			} else if ($(this).text() === "JavaScript-Advanced Topics") {
				that.state = advancedJavascript;
			} else if ($(this).text() === "HTML/CSS") {
				that.state = htmlCss;
			}
		})
	}

	hideQuiz() {
		$(".cont-q, .ques-form, .correct-ans, .wrong-ans, .question-count, .btn-nav").hide();
	}

	renderQuizMarkup() {
		$(".quiz-btn").click(() => {
			$("main").hide()
			$(".ques-form, .cont-q, .btn-nav, .question-count").fadeIn(300)	
			this.hideGoToExampleCodeText();
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
		$(".question-count").text(`${this.index}/${range} Questions`);
		
		//hide next question if it's the last question on the quiz
		this.hideNextQuesButton();
	}
	

	displayFirstQuestion() {
		$(".quiz-btn").click(() => {
			// show question count
			this.questionCount();

			$(".question").text(this.state[this.index]["question"])

			let context = this;
			$(".answer").each(function(idx, ele) {
				$(this).text(context.state[context.index]["answers"][idx])
			})

			// show "go to example" button
			this.renderExampleButton();
			
		})
	}

	renderExampleButton() {
		if (this.state[this.index]["link"] === undefined) {
			this.hideExampleButton()
			this.hideGoToExampleCodeText()
			
		} else {
			this.showExampleButton()
			this.goToExampleCodeTextShow();

			// attach a link to anchor tag if the question includes a code example on 'codepen.io' 
			$(".example").attr('href', this.state[this.index]["link"])
		}
	}

	getUserChoiceAnalize() {
		$(".option").click((e) => {
			// collect user choice
			this.userChoiceIdx = $(e.currentTarget).find("input").attr("id")

			// hide multiple choices in order to display result only
			this.formHide();

			// calculate how many question are correct and how many are wrong
			this.calcResult()

			// show result based on user choice collected
			this.showResult();

			//allow user to go to next question
			this.enableNextButton();

			this.hideGoToExampleCodeText();
		})
		
	}

	// if function returns true, then user made the right choice. 
	userMadeRightChoice() {
		return Number(this.userChoiceIdx) === this.state[this.index]["correctAnswer"];
	}

	formHide() {
		$("form").fadeOut(200).hide();
	}

	showForm() {
		$("form").fadeIn(300).show();
	}

	hideQuestion() {
		$(".question").hide();
	}

	showQuestion() {
		$(".question").show()
	}

	finalScoreHide(){
		$(".final-score").hide();
	}

	showFinalScore() {
		$(".total-q").children("span").text(`${Object.keys(this.state).length}`)
		$(".corr-ans").children("span").text(`${this.allCorrectAns}`)
		$(".wrn-ans").children("span").text(`${this.allWrongAns}`)
		$(".final-score").fadeIn(200).show();
	}

	wrongAnsText() {
		let pos = this.state[this.index]["correctAnswer"] - 1
		$(".corr-text").text(`${this.state[this.index]["answers"][pos]}`);
	}

	calcResult() {
		if (this.userMadeRightChoice()) {
			this.allCorrectAns += 1
		} else if (this.userMadeRightChoice() === false) {
			this.allWrongAns += 1
		}
	}

	showResult() {

		//hide "go to code examples" button and hide text instruction on how to use the button 
		this.hideExampleButton();	
		this.hideGoToExampleCodeText();

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
		$(".next-q-btn").prop('disabled', false);
		//style next-question button
		$(".next-q-btn").addClass("button-class")
	}

	disableNextButton() {
		$(".next-q-btn").prop('disabled', true);
		$("button-class").remove();
	}

	hideExampleButton() {
		$(".example").hide();
	}

	showExampleButton() {
		$(".example").show();
	}

	styleExampleBtn() {
		$(".code-example").addClass("button-class")
	}
	goToExampleCodeTextShow() {
		$(".count-q").append('<h4 class="text-instruc"><span class="star">&#9734;</span>click the "Code Example" button to view example on codepen.io</h4>')
	}

	hideGoToExampleCodeText() {
		$(".count-q").empty()
	}
	
	hideMainPageImages() {
		$(".quiz-btn, .results-btn, .img-cont").click(() => {
			$(".img-cont").hide();
		})
	}

	showMainPageImages() {
		$(".img-cont").fadeIn(200).show();
	}

	updateStateForNextQuestion() {
		this.showQuestion();
		this.questionCount();
		this.hideStats();
		this.showForm();
		this.disableNextButton();
	}

	renderNextQuestion() {
		$(".next-q-btn" ).click(() => {
			this.index += 1;
			this.updateStateForNextQuestion();
			this.hideGoToExampleCodeText();
		
			$(".question").text(this.state[this.index]["question"]);
			
			// show example button
			this.renderExampleButton()

			let that = this;
			$(".answer").each(function(idx, ele) {
				$(this).text(that.state[that.index]["answers"][idx]);
			})
		})	
	}
	
	//hide next question if it's the last question on the quiz
	hideNextQuesButton() {
		let range = Object.keys(this.state).length
		this.index === range ? $(".next-q-btn").hide() : null;
	}

	showNextQuesButton() {
		$(".next-q-btn").show()
	}
	
	mainPageHeaderShow() {
		$("h2").show();
	}

	hideResultsBtn(){
		$(".results-btn").hide()
	}

	defaultState() {
		this.state = '';
		this.userChoiceIdx = '';
		this.index = 1;
		this.allCorrectAns = 0;
		this.allWrongAns = 0;
	}

	backToMainPage() {
		$(".back-to-main").click(() => {
			this.showMainPageImages();
			this.defaultState();
			this.hideStats();
			this.showForm();
			this.mainPageStyleRender();
			this.renderMainPageMarkUp();
			this.mainPageHeaderShow();
			this.showQuestion();
			this.hideResultsBtn();
			this.showNextQuesButton();
			this.finalScoreHide();
			this.hideQuiz();
			this.disableNextButton();
			this.hideGoToExampleCodeText()
		})
	}	

	renderResultsButton() {
		let range = Object.keys(this.state).length
		this.index === range ? $(".results-btn").show() : null;
	}

	showFinalResult() {
		$(".results-btn").click(() => {
			this.hideQuiz();
			this.showFinalScore();
		})
	}

	// retakeQuiz() {
	// 	$(".retake-quiz").click(() => {
	// 		this.userChoiceIdx = '';
	// 		this.index = 1;
	// 		this.allCorrectAns = 0;
	// 		this.allWrongAns = 0;

	// 		$("main").hide()
	// 		$(".question-count").empty();
	// 		$(".ques-form, .cont-q, .btn-nav, .question-count").fadeIn(300)	
	// 		// this.quizStyleRender();
	// 		$('link[href="stylesheets/style1.css"]').attr({'href' : "stylesheets/style2.css"})
	// 		this.questionCount();

	// 		// this.displayFirstQuestion();
	// 		$(".question").text(this.state[this.index]["question"])
			
	// 			let context = this;
	// 			$(".answer").each(function(idx, ele) {
	// 				$(this).text(context.state[context.index]["answers"][idx])
	// 			})

	// 		this.showNextQuesButton();
	// 		this.updateStateForNextQuestion();
	// 		this.showForm();
	// 		this.getUserChoiceAnalize();
	// 		this.renderNextQuestion();
	// 		this.backToMainPage();
	// 		this.showFinalResult();
	// 		this.finalScoreHide();
	// 		this.hideResultsBtn();
	// 	})
	// }

	init() {
		this.hideQuiz();
		this.whichQuiz();
		this.renderQuizMarkup();
		this.quizStyleRender();
		this.questionCount();
		this.displayFirstQuestion();
		this.getUserChoiceAnalize();
		this.renderNextQuestion();
		this.backToMainPage();
		this.showFinalResult();
		this.finalScoreHide();
		this.hideResultsBtn();
		this.hideMainPageImages();
		this.styleExampleBtn();
	}
}

var app = new QuizApp()
app.init()



			
		
	


