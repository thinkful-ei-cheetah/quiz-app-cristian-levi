'use strict';
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