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

// quiz

class Quiz {
    constructor() {
        this.unasked = [];
        this.asked = [];
        this.score = 0;
        this.scoreHistory = [];
        this.active = false;
    }

    resetQuiz() {
        this.active = false;
        this.score = 0;
        this.asked = [];
        this.unasked = [];
    };

    startQuiz() {
        this.active = true;
        this.unasked = trivia.returnQuestions();
    };

    submitAnswer() {

    };

    askedQuestion() {
        this.asked.push(this.unasked.pop());
    };



}

// api

class TriviaApi {
    returnQuestions() {
        return [new Question('what is 2 +2', ['2', '3', '4'], '4'), new Question('what is 2 +2', ['2', '3', '4'], '4'), new Question('what is 2 +2', ['2', '3', '4'], '4'), new Question('what is 2 +2', ['2', '3', '4'], '4')]
    }
}

const trivia = new TriviaApi;

const test = new Quiz;

