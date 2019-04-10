'use strict';
/* global Renderer */

class QuizStatus extends Renderer {    // eslint-disable-line no-unused-vars
  template() {
    return `

      <div class="grid-item col-1 status-elem current-score">Score: ${this.model.score}</div>
      <div class="grid-item col-1 status-elem high-score">High Score: ${this.model.highScore()} </div>
      <div class="grid-item col-1 status-elem progress">Progress: ${this.model.progress()}</div>

    `;
  }
}