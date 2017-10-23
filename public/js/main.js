/* global $ */
"use strict";
let javascriptFundementals = require('./js-fundementals-quiz.js');
let advancedJavascript = require('./js-advanced.js');
let _ = require('lodash');

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
		$(".questions, .correct-ans, .wrong-ans, .count").hide();
	}

	renderQuizMarkup() {
		$(function(){
			$(".quiz-btn").click(function() {
				$("main").hide()
				$(".questions, .count").fadeIn(200)
				
			})
		})
	}

	quizStyleRender() {
		$(".quiz-btn").click(function() {
			$('link[href="stylesheets/style1.css"]').attr({'href' : "stylesheets/style2.css"})
		})
	}
	
	questionCount() {
		let range = Object.keys(this.state).length;
		$(".question-count").text(`${this.index}/${range}`)
	}
	// shuffleQuestions() {
		
	// }


	displayFirstQuestion() {
		let that = this
		$(".quiz-btn").click(function() {
			$("h2").text(that.state[that.index]["question"])

			$(".answer").each(function(idx, ele) {
				$(this).text(that.state[that.index]["answers"][idx])
			})
		})
	}

	getUserChoiceAndShowResult() {
		let that = this;
		$(".option").click(function() {
	
			// collect user choice
			that.userChoiceIdx = $(this).find("input").attr("id")

			// hide multiple choices in order to display result only
			that.formHide();

			// show result based on user choice collected
			that.showResult()
		})
		
	}

	// if function returns true, then user made the right choice. 
	userMadeRightChoice() {
		return Number(this.userChoiceIdx) === this.state[this.index]["correctAnswer"]
	}

	formHide() {
		$("form").fadeOut(500).hide()	
	}

	showForm() {
		$("form").fadeIn(300).show()
	}

	showResult() {
		if (this.userMadeRightChoice()) {
			$(".correct-ans").fadeIn(200)
		} else if (this.userMadeRightChoice() === false) {
			$(".wrong-ans").fadeIn(200)
		}
	}

	hideResult() {
		$(".correct-ans").hide()
		$(".wrong-ans").hide()
	}

	enableNextButton() {
		$(".option").click(function() {
			$(".next-q").prop('disabled', false);
		})
		
	}

	disableNextButton() {
		$(".next-q" ).click(function() {
			$(this).prop('disabled', true);
		})
	}
	
	renderNextQuestion() {
		let that = this;
		$(".next-q" ).click(function() {
			that.index += 1;
			// render current index for question
			that.questionCount()

			that.hideResult()
			that.showForm()

			$("h2").text(that.state[that.index]["question"])

			$(".answer").each(function(idx, ele) {
				$(this).text(that.state[that.index]["answers"][idx])
			})
		})	
	}	

	init() {
		this.hideQuiz();
		this.whichQuiz();
		this.renderQuizMarkup();
		this.quizStyleRender();
		this.questionCount();
		this.displayFirstQuestion();
		this.getUserChoiceAndShowResult();
		this.enableNextButton();
		this.renderNextQuestion();
		this.disableNextButton()
	}
}

var app = new QuizApp()
app.init()



			
		
	


