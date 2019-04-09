'use strict';
/* global Renderer */

class QuizDisplay extends Renderer {    // eslint-disable-line no-unused-vars
  getEvents() {
    return {
      'click .start': 'handleStart',
      'click .play-again': 'handlePlayAgain',
    };
  }

  _generateIntro() {
    return `
      <div>
        <header role="banner">
          <h1>Welcome to the Trivia Quiz<h1>
        </header>
        <p>
          Test your smarts and see how high you can score!
        </p>
      </div>
      <div>
        <button class="start">Start</button>
      </div>
    `;
  }

  _generateQuestion() {
    return `
      <form class="question-form">
        <label for="question-choices">${this.model.askNextQuestion().text}</label>
        <input type="radio" name="question-choices" value="${this.model.askNextQuestion().answers[0]}">${this.model.askNextQuestion().answers[0]}</input>
        <input type="radio" name="question-choices" value="${this.model.askNextQuestion().answers[1]}">${this.model.askNextQuestion().answers[1]}</input>
        <input type="radio" name="question-choices" value="${this.model.askNextQuestion().answers[2]}">${this.model.askNextQuestion().answers[2]}</input>
        <input type="radio" name="question-choices" value="${this.model.askNextQuestion().answers[3]}">${this.model.askNextQuestion().answers[3]}</input>
        <button type="submit" class="question-submit">Submit</button>
      </form>
    `;
  }

  _generateReviewCorrect() {
    return `
      <div>
        <h2>${this.model.askNextQuestion().text}<h2>
        <p>
          You got it!<br>The correct answer was:
        </p>
        <p class="correct-answer">
          ${this.model.askNextQuestion().correctAnswer}
        </p>
      </div>
      <div>
        <button class="continue">Continue</button>
      </div>
    `;
  }

  _generateReviewIncorrect() {
    return `
      <div>
        <h2>${this.model.askNextQuestion().text}<h2>
        <p>
          Sorry, that's incorrect.<br>You answered:
        </p>
        <p class="incorrect-answer">
          ${this.model.askNextQuestion().userAnswer}
        </p>
        <p>
          The correct answer was:
        </p>
        <p class="correct-answer">
          ${this.model.askNextQuestion().correctAnswer}
        </p>
      </div>
      <div>
        <button class="continue">Continue</button>
      </div>
    `;
  }

  _generateEnd() {
    let newHighScore = "";
    if (this.model.highScore() === this.model.score) {
      newHighScore = "That's a new high score!";
    }
    return `
      <div>
        <h2>Good job!<h2>
        <p>
          Your final score was ${this.model.score} out of ${this.model.asked.length}
        </p>
        <p>
          ${newHighScore}
        </p>
      </div>
      <div>
        <button class="play-again">Play Again</button>
      </div>
    `;
  }

  template() {
    if (this.model.active) {
      return this._generateQuestion();
    } else {
      return this._generateIntro();
    }
  }

  handleStart() {
    this.model.startNewGame();
    this.model.update();
  }

  handlePlayAgain() {
    this.model.resetGame();
    this.model.startNewGame();
    this.model.update();
  }
}
