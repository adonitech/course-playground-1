'use strict';
// console.log(document.querySelector('.message').textContent);
// displayMessage( 'Correct Number!';
// document.querySelector('.number').textContent = '32';
// document.querySelector('.score').textContent = '10';
// console.log(document.querySelector('.guess').value);
// console.log(document.querySelector('.message').textContent);

// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// TODO Create some other functions for other repeated codes but i am in hurry now i just skipped so do it later
const secFunc = function () {
  return Math.trunc(Math.random() * 20) + 1;
};
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
let secretNumber = secFunc();
let score = 20;
let highscore = 0;

// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(document.querySelector('.guess').value, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage('No number entered');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number');

    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // guess > secretNumber
      //   ? displayMessage('Too high')
      //   : displayMessage('Too low');
      displayMessage(guess > secretNumber ? 'Too high' : 'Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('you have lost the game.');
      document.querySelector('.score').textContent = 0;
    }
  }
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     displayMessage( 'Too high';

  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     displayMessage(
  //       'you have lost the game.');
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   // When guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     displayMessage( 'Too low')
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     displayMessage(
  //       'you have lost the game.';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

//////////////////////////////
// BUG Just trying to practice here
/// when there zero is guessed whaat should happen
//   if (document.querySelector('.guess').value === 0 && !guess) {
//     displayMessage(
//       "Can't guess a number Zero(0), Please try another number";
//   } else if (!guess) {
//     displayMessage( 'No number entered';
//   } else {
//     displayMessage( 'Start guessing..');
//   }
// });
///////////////////////////

/// BUG The again button is not updating the secretNumber and also making it NaN
// CONGRA You fixed it, the problem was you didn't put parenthesis on Math.random. After alot of struggles you manage to succeed
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = secFunc();
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
