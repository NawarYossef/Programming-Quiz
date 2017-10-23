/* global $ */
"use strict";


let data = {
  1: {
    question: 'In ES6, the "class" is:',
    answers: ['a function that provides better syntax without changing the prototype inheritance model', 'a function that implements pure Object Ortinted design similar to that of C++ and Java', 
    'a Juqery method used to create contsructor functions', 'a keyword only used for Object orinted programming in Node.js'],
    correctAnswer: 1
  }, 
  2: {
    question: 'Each time a function is executed, it gets a "this" property. in order to get the value of the "this" inside a function, we have to find the location in the code:',
    answers: ['where "this" was written', 'where "this" was executed', 'where the function was written', 'where the function was called'],
    correctAnswer: 4
  },
  3: {
    question: 'In this code example, "HELLO" is not displayed. What is wrong with the Jquery code?',
    answers: ['the "this " keyword binds the click event to the Window object which returns undefined', 'Event listeners do not apply to "button" elements. This is flaw in the Jquery library. a "button" tag needs to be replaced with "a" tag.', 
    '"$(this)" needs to replace "this" becuase $("this") will create a jquery object and enable the use of the ".click()" method.', 'none of the above'],
    correctAnswer: 3
  }, 
  4: {
    question: 'In this code example. The code alerts "undefined" to the screen. In order to resolve this issue we need to:',
    answers: ['on line-8: we need to change "function()" to an arrow function "$(() => )"', 'on line-3: use let value = "Hello World" instead of using the ".this" keyword to initialize a variable', 'on line-14: use "var" instead of "let"', 'none of the above'],
    correctAnswer: 1
  },
  5: {
    question: ' In javascript "String" is a:',
    answers: ['sub-type of a class', 'sub-type of a method', 'sub-type of an object', 'sub-type of a string'],
    correctAnswer: 3
  },
  6: {
    question: '"1" == 1 will return',
    anwers: ['false', 'true', 'undefined', 'null'],
    correctAnswer: 2
  }
}

module.exports = data