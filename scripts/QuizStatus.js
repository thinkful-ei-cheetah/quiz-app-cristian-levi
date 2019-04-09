'use strict';
/* global Renderer */

class QuizStatus extends Renderer {    // eslint-disable-line no-unused-vars
  template() {
    return `
      <div class="status-bar-container">
        <div class="current-score">Score: ${q.score}</div>
        <div class="high-score">High Score: ${q.highScore()} </div>
        <div class="progress">Progress: ${q.progress()}</div>
      </div>
    `;
  }
}
