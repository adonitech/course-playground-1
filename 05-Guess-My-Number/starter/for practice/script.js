'use strict';
let score = 20;
let highscore = 0;
const secretNumberGeneratorFunction = () => {
  return Math.trunc(Math.random() * 20) + 1;
};
let secretNumber = secretNumberGeneratorFunction();
console.log(secretNumber);
let scoreBoard = document.querySelector('.score');
let hiddenBoard = document.querySelector('.number');
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('No number entered!');
  } else if (guess < 1 || guess > 20) {
    displayMessage('Place a number between 1 - 20');
  } else if (guess === secretNumber) {
    displayMessage('Correct!');

    // revealing the secretNumber
    hiddenBoard.textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';

    if (score > highscore) {
      highscore = score;

      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      guess < secretNumber
        ? displayMessage('Too low')
        : displayMessage('Too high');

      score -= 1;
      scoreBoard.textContent = score;
    } else {
      scoreBoard.textContent = 0;
      hiddenBoard.textContent = secretNumber;
      displayMessage(`You just lost. The secret number was ${secretNumber}`);
      document.querySelector('.guess').disabled = true;
      document.querySelector('body').style.backgroundColor = '#e03939';
      document.querySelector('.guess').value = '';
    }
  }
  // document.querySelector('.guess').value = '';
});

const again = document.querySelector('.again');
again.addEventListener('click', function () {
  secretNumber = secretNumberGeneratorFunction();
  console.log(secretNumber);
  hiddenBoard.textContent = '?';
  score = 20;
  document.querySelector('.guess').disabled = false;
  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.guess').value = '';
  scoreBoard.textContent = score;
  displayMessage('Start guessing...');
});
