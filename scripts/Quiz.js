'use strict';
/* global Model */
/* global Model */

/**
 * You can replace this Quiz with the version you worked on yesterday. It's just
 * provided as an example.
 */

class Quiz extends Model {          // eslint-disable-line no-unused-vars

  // This class property could be used to determine the no. of quiz questions
  // In later implementations, the user could provide a quiz length and override
  static DEFAULT_QUIZ_LENGTH = '3';

  constructor() {
    super();    
    this.unasked = [];
    this.asked = [];
    this.score = 0;
    this.scoreHistory = [0, 0];
    this.active = false;
  }

    resetGame() {
        this.scoreHistory.push(this.score);
        this.unasked = [];
        this.asked = [];
        this.score = 0;
    }

    startNewGame() {
        this.active = true;
        let newQuestions = new TriviaApi(Quiz.DEFAULT_QUIZ_LENGTH); 
        return newQuestions.getQuestions().then(() => this.unasked = [...newQuestions.questions]);
    }

    askNextQuestion() {
        this.asked.push(this.unasked.pop());
    }

    currQuestion() {
      return this.asked[this.asked.length - 1];
    }

    submitAnswer(answer) {
        // uddate useranswer in the question
        // check if it is unanswered --> throw error
        // incorrect or correct --> update score
        const currQuestion = this.currQuestion();
        currQuestion.userAnswer = answer;
        if (currQuestion.answerStatus() === -1) {
            throw new Error('Must answer question!!!');
        }
        else {
            this.score += currQuestion.answerStatus();
            // if (this.unasked.length === 0) {
            //     this.active = false;
            // }
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
