/* global $ */
"use strict";


let data = {
	questions: {
		1: {
			question: 'Which of the following solutions cna be used to convert the string "1234" to an array of numbers [1, 2, 3, 4]:',
			answers: ['String("1234").Array((char) => char.toNumber())', 'Array.from("1234").map(Number)', '"1234".map(Number).toArray()', '"1234".split("").Array().Number()']
		},
		2: {
			question: 'What will the following code log to the console:',
			answers: []
		}
	}
}


module.exports = javascriptFundementals
