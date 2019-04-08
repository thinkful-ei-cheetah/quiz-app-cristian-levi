'use strict';

// question
class Question {
    constructor(text, answers, correctAnswer) {
        this.text = text;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
        this.userAnswer = null;
    }
    submitAnswer(answer) {
        this.userAnswer = answer;
    }
    answerStatus() {
        if (this.userAnswer === null) {
            return -1;
        }
        else if (this.userAnswer !== this.correctAnswer) {
            return 0;
        }
        else {
            return 1;
        }
    }
}

// api

class TriviaApi {

}

// quiz

class Quiz {

}