/* global $ */
"use strict";


let data = {
	1: {
		question: 'Which of the following solutions cna be used to convert the string "1234" to an array of numbers [1, 2, 3, 4]:',
		answers: ['String("1234").Array((char) => char.toNumber())', 'Array.from("1234").map(Number)', '"1234".map(Number).toArray()', '"1234".split("").Array().Number()'],
		correctAnswer: 2
	},
	2: {
		question: 'What will the following code log to the console:',
		answers: ['Austin Powers', 'Austin', 'Powers', 'Dr. Evil'],
		correctAnswer: 1
	}, 
	3: {
		question: 'In this code example, the event.preventDefault() method: ',
		answers: ['binds each anchor element to the "body" element', 'stops the default behavior of the anchor element', 'prevents the function from running is Closure is Present', "doesn't run because its not a Juqery method"],
		correctAnswer: 2
	},
	4: {
		question: 'What will this code Boolean(!true) log to the console:',
		answers: ['true', 'false', '!true', 'undefined'],
		correctAnswer: 2
	},
	5: {
		question: 'We need to organize the following array elements in descending order [3, 4, 1, 67, 32, 7]. which method should we use:',
		answers: ['organize()', 'rise()', 'sort()', 'none of the above'],
		correctAnswer: 3
	},
	6: {
		question: 'In this code snipit, the function square returns an array of "undefined" ([undefined, undefined, undefined, undefined]) instead of an array of squared numbers. This is because:',
		answers: [' a "return" keyword needs to be added before "num * num"', 'a "return" statement should never be used with the .map() method', ' the array is being mutated inside a function', 
		'Wait! there is nothing wrong with that function. It returns the expected result.'],
		correctAnswer: 1
	},
	7: {
		question: 'what is the value of "originalArray" after we run the code bellow',
		answers: ['[4, 1, 2, 3]', '[1, 2, 3]', '[1, 2, 3, "4"]', '[1, 2, 3, 4]'],
		correctAnswer: 4
	}	
}



module.exports = data
