/* global Quiz, QuizDisplay, QuizStatus */

// By putting these variables in global scope, you can experiment with them in
// the debug console.
let q, quizDisplay, quizStatus;    // eslint-disable-line no-unused-vars

function main() {
  q = new Quiz();
  quizDisplay = new QuizDisplay(q, '.display');
  quizStatus = new QuizStatus(q, '.status');
}

$(main);
