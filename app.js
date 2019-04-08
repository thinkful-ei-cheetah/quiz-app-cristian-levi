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

    reset() {
        this.scoreHistory.push(this.score);
        this.unasked = [];
        this.asked = [];
        this.score = 0;
        this.active = false;
    }

    start() {
        this.active = true;
        this.unasked = [new Question('what is 2 + 2', ['2', '3', '4'], '4'), new Question('what is 2 + 2', ['2', '3', '4'], '4'), new Question('what is 2 + 2', ['2', '3', '4'], '4'), new Question('what is 2 + 2', ['2', '3', '4'], '4')];
    }

    ask() {
        this.asked.push(this.unasked.pop());
        return this.asked[this.asked.length -1];
    }

    submitAnswer(answer) {
        // uddate useranswer in the question
        // check if it is unanswered --> throw error
        // incorrect or correct --> update score
        const currQuestion = this.asked[this.asked.length -1];
        currQuestion.userAnswer = answer;
        if (currQuestion.answerStatus() === -1) {
            throw new Error('Must answer question!!!');
        }
        else {
            this.score += currQuestion.answerStatus();
            if (this.unasked.length === 0) {
                this.active = false;
            }
        }
    }

    highScore() {
        return this.scoreHistory.find((a, b) => b - a);
    }

    progress() {
        if (this.active === false) {
            return "Inactive";
        }
        else {
            const total = this.asked.length +  this.unasked.length;
            return `${this.asked.length} of ${total}`;
        }
    }

}

// api

class TriviaApi {
    constructor() {
        const BASE_URL = "https://opentdb.com/api.php?amount=5&token=";
        const token = fetch("https://opentdb.com/api_token.php?command=request")
        .then(res => res.json())
        .then(data => data.token);

        this.getQuestions = function() {return fetch(BASE_URL + "5ffaf0ee979060219ce8a08b21fdcac01b67a008147b98c4736f2a7bcccfb824")
        .then(res => res.json())
        .then(res => res.results);
        };
    }
}

let t = new TriviaApi;

console.log(t.getQuestions());