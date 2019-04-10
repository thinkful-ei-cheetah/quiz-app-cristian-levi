'use strict';
/* global Renderer */

class QuizDisplay extends Renderer {    // eslint-disable-line no-unused-vars
  getEvents() {
    return {
      'click .start': 'handleStart',
      'click .play-again': 'handlePlayAgain',
      'submit .question-form': 'handleQuestionSubmit',
      'click .question-continue': 'handleReviewContinue'
    };
  }

  _generateIntro() {
    return `
      <div class="grid-row">
        <header class="grid-item col-3">
          <h1>Welcome to the Trivia Quiz</h1>
        </header>
        <p class="grid-row col-2">
          Test your smarts and see how high you can score!
        </p>
      </div>
      <button class="grid-row grid-item col-2 start">Start</button>
    `;
  }
  //loop through answers and generate radio buttons for each one
  _generateQuestion() {
    let answerElem = "";
    let option = "";
    for (let i = 0; i < this.model.currQuestion().answers.length; i++) {
      option += "I";
      let q = this.model.currQuestion().answers[i];
      answerElem += `<div class="col-3"><input class="grid-item radio" type="radio" id="${option}" name="question-choices" value="${q}" required><label for="${option}" class="grid-item col-2 radio">${q}</label></div>`;
    }
    return `
      <form class="grid-row question-form">
        <h1>Question ${this.model.asked.length}:</h1>
        <label class="grid-item col-3 question-text" for="question-choices">${this.model.currQuestion().text}</label>
        ${answerElem}
        <button type="submit" class="grid-row grid-item col-2 question-submit">Submit</button>
      </form>
    `;
  }

  _generateReviewCorrect() {
    return `
      <div class="grid-row col-3">
        <h1 class= "grid-item col-3 question-text">${this.model.currQuestion().text}</h1>
        <p class="grid-row col-2 question-feedback">
          You got it!
        </p>
        <p class="grid-row col-2 question-feedback">
          The correct answer was:
        </p>
        <p class="grid-row col-2 question-correct">
          ${this.model.currQuestion().correctAnswer}
        </p>
      </div>
      <button class="grid-row grid-item col-2 question-continue">Continue</button>
    `;
  }

  _generateReviewIncorrect() {
    return `
      <div class="grid-row col-3">
        <h1 class= "grid-item col-3 question-text">${this.model.currQuestion().text}</h1>
        <p class="grid-row col-2 question-feedback">
          Sorry, that's incorrect.
        </p>
        <p class="grid-row col-2 question-feedback">
          You answered:
        </p>
        <p class="grid-row col-2 question-incorrect">
          ${this.model.currQuestion().userAnswer}
        </p>
        <p class="grid-row col-2 question-feedback">
          The correct answer was:
        </p>
        <p class="grid-row col-2 question-correct">
          ${this.model.currQuestion().correctAnswer}
        </p>
      </div>
      <div>
        <button class="grid-row grid-item col-2 question-continue">Continue</button>
      </div>
    `;
  }

  _generateEnd() {
    let newHighScore = "";
    if (this.model.score > this.model.highScore()) {
      newHighScore = "That's a new high score!";
    }
    return `
      <div class="grid-row">
        <div class="grid-item col-3">
          <h1>Good job!</h1>
        </div>
        <p class="grid-row col-2">
          Your final score was<br>${this.model.score} out of ${this.model.asked.length}
        </p>
        <p class="grid-row col-2 new-high-score">
          ${newHighScore}
        </p>
      </div>
      <button class="grid-row grid-item col-2 play-again">Play Again</button>
    `;
  }

  template() {
    if (this.model.active && this.model.currQuestion().answerStatus() === -1) {
      return this._generateQuestion();
    } 
    else if (this.model.active && this.model.currQuestion().answerStatus() === 0) {
      return this._generateReviewIncorrect();
    }
    else if (this.model.active && this.model.currQuestion().answerStatus() === 1) {
      return this._generateReviewCorrect();
    }
    else if (!this.model.active && this.model.asked.length && !this.model.unasked.length) {
      return this._generateEnd();
    }
    else {
      return this._generateIntro();
    }
  }

  handleStart() {
    this.model.startNewGame()
    .then(() => this.model.askNextQuestion())
    .then(() => this.model.update());
  }

  handlePlayAgain() {
    this.model.resetGame();
    this.model.update();
  }

  handleQuestionSubmit(event) {
    event.preventDefault();
    const answer = $("input[name='question-choices']:checked").val();
    this.model.submitAnswer(answer);
    if (this.model.currQuestion().answerStatus() === 1) {
      this.model.score += 1;
    }
    this.model.update();
  }

  handleReviewContinue() {
    if (this.model.unasked.length) {
      this.model.askNextQuestion();
    }
    else {
      this.model.active = false;
    }
    this.model.update();
  }

}
