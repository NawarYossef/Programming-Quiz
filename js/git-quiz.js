/* global $ */
"use strict";

let data = {
	1: {
		question: ' The command to use for initializing a new Git repository is: ',
    answers: ["git add .", "git push", "git commit", "git init"],
    correctAnswer: 4
	},
	2: {
		question: "We've just created a new file called index.html. Which of the following will stage this one file so we can commit it?",
		answers: ["git commit index.html", "git stage index.html", "git add index.html", "none of the above"],
		correctAnswer: 3
	},

	3: {
		question: 'How would you commit a staged file with this with the message "change background color',
		answers: ['git commit -m "change backgroud color"', 'git commit "change background color"', 'git add message "change background color"', 'git -m "add background color"'],
    correctAnswer: 1
	},
	4: {
		question: 'We made changes to a lot of files and want to stage them all using one command. which command should we use?',
    answers: ["git add", "git add .", "git add ...", "git add commit"],
    correctAnswer: 2
	},
	5: {
		question: "You have finished implementing a new feature on a branch, you want to bring that new feature into the main branch, so that everyone can use it. Which command will you use?",
    answers: ["git add all", "git merge all", "git merge", "git add"],
    correctAnswer: 3
	},
	6: {
		question: 'What is the name of the file used to tell Git to ignore certain files?',
    answers: ["gitignore", ".gitignore",   "ignore.git",   ".ignore"],
    correctAnswer: 2
  },
  7: {
		question: 'What command do you run to view the commit history of your repository?',
    answers: ["git history",  "git log",  "git commit -h",  "git past"],
    correctAnswer: 2
  }
}

module.exports = data

