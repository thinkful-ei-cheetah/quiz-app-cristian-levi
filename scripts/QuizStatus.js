'use strict';
/* global Renderer */

class QuizStatus extends Renderer {    // eslint-disable-line no-unused-vars
  template() {
    return `
      <div class="status-bar-container">
        <div class="current-score">Score: ${this.model.score}</div>
        <div class="high-score">High Score: ${this.model.highScore()} </div>
        <div class="progress">Progress: ${this.model.progress()}</div>
      </div>
    `;
  }
}