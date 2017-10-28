/* global $ */
"use strict";

let data = {
	1: {
		question: 'In this code example(click on Code Example button to view code), which css rule we need to add in order to align the two squares?',
    answers: [".square1 {display: inline-block; }", ".square2 {float: left}", ".square1, .square2 {align: both}", ".square2 {display: inline}"],
    correctAnswer: 1
	},
	2: {
		question: "Which CSS property is best used if the content of an element exceeds the size of the element's box:",
		answers: ["overflow", "hide()", "animate.element", ".contain-Class"],
		correctAnswer: 1
	},

	3: {
		question: 'When building standard website, it is best to avoid using the {position:absolute} CSS rule because:',
		answers: ["it makes the web page look smaller in size and makes colors brighter", "it becomes difficult to apply responsive design and control the flow of the page",  "it add more padding and margin to all elements on the page", "it affects the performace of any JavaScript code on the page"],
    correctAnswer: 2
	},
	4: {
		question: 'In this code example, which CSS rule can be used to add to only display the text inside the blue box?',
    answers: ["{display: none;}", "{apply(css.div)}", "{hide: text;}", "{overflow: hidden;}"],
    correctAnswer: 4
	},
	5: {
		question: "We use the HTML DOCTYPE because: ",
    answers: ["It tells the browser which version of HTML the page is written in", "It performs a GET request to the browser", "It contains all the HTML data that gets sent to the server", "None of the above"],
    correctAnswer: 1
	},
	6: {
		question: 'Setting an element to {display: none;} is the same as:',
    answers: ["visibility: hidden", "background: none", "$().hide()", "none of the above"],
    correctAnswer: 4
	}
}

module.exports = data

