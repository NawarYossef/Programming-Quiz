(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
/* global $ */
"use strict";
let script = require('./js-fundementals-quiz.js');


class SomeClass {
	myMethod(){
		console.log("ffff")
	}
}

var instance = new SomeClass()
instance.myMethod()

},{"./js-fundementals-quiz.js":1}]},{},[2]);
