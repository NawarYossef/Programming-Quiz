/* global $ */
"use strict";

let data = {
	1: {
		question: 'Which of the following solutions can be used to convert the string "1234" to an array of numbers [1, 2, 3, 4]:',
    answers: ['String("1234").Array((char) => char.toNumber())', 'Array.from("1234").map(Number)', '"1234".map(Number).toArray()', '"1234".split("").Array().Number()'],
    correctAnswer: 2
	},
	2: {
		question: 'In this code example(click on Code Example button to view code), What will the code log to the console:',
		answers: ['Austin Powers', 'Austin', 'Powers', 'Dr. Evil'],
		link: "https://codepen.io/nawaryossef/pen/eGwWmZ",
		correctAnswer: 1
	},

	3: {
		question: 'In this code example, the "event.preventDefault()" method: ',
		answers: ['binds each anchor element to the "body" element', 'prevents the function from running inside a closure',  'stops the default behavior of the anchor element', "doesn't run because it's not a Jquery method"],
		link: "https://codepen.io/nawaryossef/pen/qPvoqO",
    correctAnswer: 3
	},
	4: {
		question: 'What will this code "Boolean(!true)" log to the console:',
		answers: ['true', 'false', '!true', 'undefined'],
		correctAnswer: 2
	},
	5: {
		question: 'Which of the following algorithms is used to organize the array elements “[3, 4, 1, 67, 32, 7]” in an ascending order:',
    answers: ['[3, 4, 1, 67, 32, 7].sort((a,b) => a - b)', '[3, 4, 1, 67, 32, 7].sort((a,b) => a + b)', 'sort(all)', '[3, 4, 1, 67, 32, 7].sort((a,b) => b - a)'],
    correctAnswer: 1
	},
	6: {
		question: 'In this code example, the function square returns an array of "undefined" ([undefined, undefined, undefined, undefined]) instead of an array of squared numbers. This is because:',
    answers: [' a "return" keyword needs to be added before "num * num"', 'a "return" statement should never be used with the .map() method', ' the array is being mutated inside a function',
		'Wait! there is nothing wrong with that function. It returns the expected result.'],
		link: "https://codepen.io/nawaryossef/pen/aLMYXZ",
    correctAnswer: 1
	},
	7: {
		question: 'In this code example, what is the value of "originalArray" after we run the code?',
		answers: ['[4, 1, 2, 3]', '[1, 2, 3]', '[1, 2, 3, "4"]', '[1, 2, 3, 4]'],
		link: "https://codepen.io/nawaryossef/pen/aLMYgm",
		correctAnswer: 4
	}	
}

module.exports = data
