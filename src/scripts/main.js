'use strict';

// Uncomment the next lines to use your game instance in the browser
const Game = require('../modules/Game.class');
const game = new Game();

// Write your code here
const updateUI = () => {
  const rows = document.querySelectorAll('.field-row');

  rows.forEach((tr, r) => {
    const cells = tr.querySelectorAll('.field-cell');

    cells.forEach((td, c) => {
      td.textContent = game.field[r][c] === 0 ? '' : game.field[r][c];
    });
  });
  document.querySelector('.game-score').textContent = game.getScore();

  document
    .querySelector('.message-lose')
    .classList.toggle('hidden', game.getStatus() !== 'lose');

  document
    .querySelector('.message-win')
    .classList.toggle('hidden', game.getStatus() !== 'win');
};

document.querySelector('.start').addEventListener('click', () => {
  game.start();
  updateUI();
});

document.addEventListener('keydown', (e) => {
  if (game.getStatus() !== 'playing') {
    return;
  }

  if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
    switch (e.key) {
      case 'ArrowUp':
        game.moveUp();
        break;
      case 'ArrowDown':
        game.moveDown();
        break;
      case 'ArrowLeft':
        game.moveLeft();
        break;
      case 'ArrowRight':
        game.moveRight();
        break;
    }
    updateUI();
  }
});
