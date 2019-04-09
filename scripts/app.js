'use strict';

// question
class Question {
    constructor(text, answers, correctAnswer) {
        this.text = text;
        this.answers = this.shuffle(answers);
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
    shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }
}

// quiz

class OurQuiz {
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
        let newQuestions = new TriviaApi(); 
        newQuestions.getQuestions().then(() => this.unasked = [...newQuestions.questions]);
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
        this.BASE_URL = "https://opentdb.com/api.php?amount=5&token=";
        this.token = null;
        this.questions = [];
    }
    getToken() {
        if (this.token) {
            return Promise.resolve(this.token);
        }
        else {
            return fetch("https://opentdb.com/api_token.php?command=request")
            .then(res => res.json())
            .then(data => data.token);
        }
    }
    getQuestions() {
        return this.getToken()
        .then(token => fetch(this.BASE_URL + token))
        .then(res => res.json())
        .then(data => this.questions = data.results.map(q => new Question(q.question, [...q["incorrect_answers"], q["correct_answer"]], q["correct_answer"])));
        // .then(data => this.questions = [...data.results]);
    }
}

let t = new TriviaApi();
t.getQuestions().then(() => console.log(t.questions));