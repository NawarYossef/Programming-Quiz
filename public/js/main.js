/* global $ */
"use strict";
let javascriptFundementals = require('./js-fundementals-quiz.js');
let advancedJavascript = require('./js-advanced.js');
let _ = require('lodash');

class QuizApp {
	constructor() {
	 this.state = '';
	 this.userChoiceIdx = ''
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

	getUserChoice() {
		let that = this;
		$(".option").click(function() {
			// radio box will be checked when user makes a choice
			$(this).find("input").prop('checked', true);
			// collect user choice
			that.userChoiceIdx = $(this).find("input").attr("id")
			console.log(Number(that.userChoiceIdx) === that.state[that.index]["correctAnswer"])
			that.showResult()
		})
		
	}

	// if function returns true, then user made the right choice. 
	userMadeRightChoice() {
		return Number(this.userChoiceIdx) === this.state[this.index]["correctAnswer"]
	}

	showResult() {
		if (this.userMadeRightChoice()) {
			$(".correct-ans").fadeIn(200)
		} else if (this.userMadeRightChoice() === false) {
			$(".wrong-ans").fadeIn(200)
		}
	}
	
	renderNextQuestion() {
		let that = this;
		$(".next-q" ).click(function() {
			that.index += 1;
			that.questionCount()
			$("h2").text(that.state[index]["question"])

			$("li").each(function(i, ele) {
				$(this).text(that.state[index]["answers"][i])
			})
			index += 1;
		})
		
	}	

	
}


var app = new QuizApp()
app.hideQuiz()
app.whichQuiz()
app.renderQuizMarkup()
app.quizStyleRender()
app.questionCount()
app.displayFirstQuestion()
app.getUserChoice()



			
		
	


