'use strict';

let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highscore = 0;

//document.querySelector('.number').textContent = secretNumber;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message
}

const displayScore = function (score) {
    document.querySelector('.score').textContent = score;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        displayMessage('⛔️ No number!');
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number!');
        document.querySelector('.number').textContent = guess;

        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem'

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
            displayMessage('💥 You lost the game!')
        }
    }
});


document.querySelector('.again').addEventListener('click', function() {
    secretNumber = Math.trunc(Math.random()*20) + 1;
    score = 20
    displayMessage('Start guessing...')
    displayScore(score);
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'
})

//teste
