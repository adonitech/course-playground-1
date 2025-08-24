'use strict';

// Selecting Elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
let currentScore0 = document.querySelector('#current--0');
let currentScore1 = document.querySelector('#current--1');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

score0El.textContent = 0;
score1El.textContent = 0;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// dice.style.display = 'none';
diceEl.classList.add('hidden');

btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    let dice = Math.trunc(Math.random() * 6) + 1;
    console.log(`dice-${dice}.png`);
    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.setAttribute('src', `dice-${dice}.png`);

    // 3. Check for rolled 1
    if (dice !== 1) {
      // Add dice to current score
      // My code to add dice to current score:- currentScore0.textContent = Number(currentScore0.textContent) + dice;

      currentScore += dice; // currentScore = currentScore + dice
      // currentScore0.textContent = currentScore;  TODO Change Later i did it below
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;

    // scores[1] = scores[1] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 20) {
      // Finish the game
      playing = false;
      diceEl.classList.add('hidden');
      btnHold.style.cursor = 'no-drop';
      btnRoll.style.cursor = 'no-drop';
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch to the next player
      switchPlayer();
    }

    // score0El.textContent =
    //   Number(currentScore0.textContent) + Number(score0El.textContent);
    // currentScore0.textContent = 0;
  }
});

btnNew.addEventListener('click', function () {
  currentScore = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  player0El.classList.add('player--active');
  currentScore0.textContent = 0;
  document.getElementById(`current--1`).textContent = 0;
  btnHold.style.cursor = 'pointer';
  btnRoll.style.cursor = 'pointer';
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  activePlayer = 0;
  diceEl.classList.add('hidden');
  dice = 0;
  document.getElementById(`current--0`).textContent = 0;
});
