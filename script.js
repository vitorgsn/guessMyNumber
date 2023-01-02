'use strict';

const selectMessage = document.querySelector('.message');
const selectScore = document.querySelector('.score');
const selectGuess = document.querySelector('.guess');
const btnSelectCheck = document.querySelector('.check');
const selectNumber = document.querySelector('.number');
const selectBody = document.querySelector('body');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//document.querySelector('.number').textContent = secretNumber;

const displayMessage = function (message) {
  selectMessage.textContent = message;
};

const displayScore = function (score) {
  selectScore.textContent = score;
};

btnSelectCheck.addEventListener('click', function () {
  const guess = Number(selectGuess.value);

  if (!guess) {
    displayMessage('⛔️ No number!');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    selectNumber.textContent = guess;

    selectBody.style.backgroundColor = '#60b347';
    selectNumber.style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      displayScore(score);
    } else {
      displayScore(0);
      displayMessage('💥 You lost the game!');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage('Start guessing...');
  displayScore(score);
  selectNumber.textContent = '?';
  selectGuess.value = '';

  selectBody.style.backgroundColor = '#222';
  selectNumber.style.width = '15rem';
});
