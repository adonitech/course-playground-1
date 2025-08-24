'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2025-08-01T17:01:17.194Z',
    '2025-08-05T23:36:17.929Z',
    '2025-08-06T21:52:41.657Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  locale: 'pt-PT',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  locale: 'de-DE',
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));

  const daysPassed = calcDaysPassed(new Date(), date);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    // const day = `${date.getDate()}`.padStart(2, 0);
    // const month = `${date.getMonth() + 1}`.padStart(2, 0);
    // const year = date.getFullYear();
    // return `${day}/${month}/${year}`;

    return new Intl.DateTimeFormat(locale).format(date);
  }
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;
  movs.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    const html = `
  <div class="movements__row">
    <div class="movements__type movements__type--${type}">
          ${i + 1} ${type}
    </div>
    <div class="movements__date">${displayDate}</div>
    <div class="movements__value">${formattedMov}</div>
  </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (account) {
  account.balance = account.movements.reduce((acc, cur) => (acc += cur), 0);
  const formattedMov = formatCur(
    account.balance,
    account.locale,
    account.currency
  );

  labelBalance.textContent = `${formattedMov}`;
};
const calcDisplaySummary = function (account) {
  const incomes = account.movements
    .filter(mon => mon > 0)
    .reduce((acc, mon) => acc + mon, 0)
    .toFixed(2);
  labelSumIn.textContent = formatCur(incomes, account.locale, account.currency);

  const out = account.movements
    .filter(mon => mon < 0)
    .reduce((acc, mon) => acc + mon, 0);
  // READ READ
  // labelSumOut.textContent = out.toString().replace('-', '');
  labelSumOut.textContent = formatCur(
    Math.abs(out),
    account.locale,
    account.currency
  );

  const interest = account.movements
    .filter(mon => mon > 0)
    .map(mov => (mov * account.interestRate) / 100)
    .filter(mon => mon >= 1)
    .reduce((acc, int) => acc + int, 0)
    .toFixed(2);
  labelSumInterest.textContent = formatCur(
    interest,
    account.locale,
    account.currency
  );
};
calcDisplaySummary(account1);

// READ Computing Usernames
const createUsernames = function (accs) {
  console.log(accs);
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(value => value[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);
  // Display balance
  calcDisplayBalance(acc);
  // Display summary
  calcDisplaySummary(acc);
};

// Experimenting API
const startLogOutTimer = function () {
  // Set time to 5mins
  let time = 81;
  const tick = function () {
    const min = String(Math.floor(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    // In each call, print the remaining time to UI
    labelTimer.textContent = `${min} : ${sec}`;

    // When time 0 seconds, stop timer and log out user
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
    }
    // Decrease 1s
    time--;
  };
  tick();
  // Call the timer every second
  const timer = setInterval(tick, 1000);
  return timer;
};
// Event handler
let currentAccount, timer;

// FAke account
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value.toLowerCase()
  );

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.slice(
      0,
      currentAccount.owner.indexOf(' ')
    )}`;
    containerApp.style.opacity = 100;

    // Create current date and time
    // const now = new Date();
    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);

    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      // weekday: 'short',
    };

    // const locale = navigator.language;
    // console.log(locale);

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // Clear input fields
    // inputLoginUsername.value = '';
    // inputLoginPin.value = '';
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    if (timer) clearInterval(timer);
    timer = startLogOutTimer();
    // Display UI
    updateUI(currentAccount);
  }
  console.log(currentAccount.owner, inputLoginUsername.value);
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    // might be BUG TODO
    // updateUI(receiverAcc);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());
    updateUI(currentAccount);

    // Reset timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const loan = Math.floor(inputLoanAmount.value);

  if (loan > 0 && currentAccount.movements.some(mov => mov >= loan * 0.1)) {
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(loan);

      // Add loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);
      // Reset timer
      clearInterval(timer);
      timer = startLogOutTimer();
    }, 4000);
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  console.log('right', currentAccount);
  console.log(inputCloseUsername.value);
  console.log(inputClosePin.value);

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    // as Reference
    // READ bad practice because it won't check the credentials meaning that the once the user enter to the account it can delete it IDK  BUG TODO
    // accounts.splice(accounts.indexOf(currentAccount), 1);
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    // Delete account
    accounts.splice(index, 1);
    console.log(accounts);

    // Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});
// console.clear();
/*
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
// Base 10 = from 0 - 9. 1/10 = 0.1 and 3/10 = 0.33333333
// Binary base 2 = from 0 and 1
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3); // false

// Converting strings to Numbers
console.log(Number('23'));
console.log(+'23'); // Number 23 not String 23

/// Parsing
// accepts second argument which is regEx so its a base so we're using base 10 so we specify 10
// parseInt: Int stands for Integer
console.log(Number.parseInt('300px', 10)); // 300
// to parse the number it must start with number not letter
console.log(Number.parseInt('e23', 10)); //NaN

console.log(Number.parseInt('  2.4rem')); // 2 only the integer is parsed
console.log(Number.parseFloat('  2.4rem')); // 2.4

// READ These two functions are GLOBAL FUNCTION meaning that we don't need to call them in Number obj
console.log(parseFloat('  2.4rem')); // 2.4 // BUT not encouraged just use Number obj

// Use it only to check if the value is NOT a number
console.log(Number.isNaN('20'));
console.log(Number.isNaN(20));
console.log(Number.isNaN('afg')); // false b/c its string and it is not a number okay
console.log(Number.isNaN(+'20x'));
console.log(Number.isNaN(23 / 0));

// Best way to check if a value is a number
console.log(Number.isFinite(20.9));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20x'));
console.log(Number.isFinite(23 / 0)); // false b/c 23/0 gives Infinity

console.log(Number.isInteger(23.8)); // false
console.log(Number.isInteger(23.0)); // true
console.log(Number.isInteger(23 / 0)); // false
console.clear();
///////////////////////////////
// SUMMARY - READ READ READ READ
// TO read a number from string use Number.parseFloat()
// To check if something is a number use Number.isFinite()

console.log(Math.sqrt(25));
console.log(25 ** (1 / 2)); // Square root
console.log(8 ** (1 / 3)); // Qubic root

// Math.max actually do type coersion
console.log(Math.max(23, 8, 7, 10, 2929, 38, 3));
console.log(Math.max(23, 8, 7, 10, '2929', 38, 3));
console.log(Math.max(23, 8, 7, 10, '2929px', 38, 3)); // but don't do PARSING

console.log(Math.min(23, 8, 7, 10, 2929, 38, 3));
console.log(Math.min(23, 8, 7, 10, '2929', 38, 3));

// area of a circle = pi * radius ** 2
console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  Math.trunc(Math.random() * (max - min) + 1) + min;
console.log(randomInt(2, 7));

let a = [];
for (let i = 0; i < 1000; i++) {
  a.push(randomInt(2, 7));
}
const aSet = new Set(a.sort());
console.log(aSet);
console.clear();
// Rounding Integers
// READ all of the do type coercing
console.log(Math.round(23.3)); // 23 rounds to the nearest Int
console.log(Math.round(23.9)); // 24

console.log(Math.ceil(23.3)); // 24
console.log(Math.ceil(23.9)); // 24

console.log(Math.trunc(23.3)); // 23 removes the decimal part
console.log(Math.trunc(23.9)); // 23

console.log(Math.floor(23.3)); // 23
console.log(Math.floor(23.9)); // 23
// floor and trunc do the same when we dealing with positive No
// but with Negative Numbers

console.log(Math.trunc(-23.9)); // -23
console.log(Math.trunc(-23.3)); // -23 just removes the decimal part

console.log(Math.floor(-23.3)); // -24
console.log(Math.floor(-23.9)); // -24

// ROUNDING DECIMALS
// READ the toFixed argument is just how many numbers we want after the point But RETURNS a STRING
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.345).toFixed(3));
console.log(+(2.345).toFixed(3)); // 2.345 NOW ITS NUMBER
console.clear();

////////////////////////////////////
// The Remainder Operator
console.log(5 % 2); // 1 b/c it is the remainder
console.log(8 % 3); // 2

// Using Remainder to check whether EVEN or ODD
console.log(8 % 2); // 0
console.log(7 % 2); // 1

const isEvenOrOdd = num => {
  num % 2 === 1 ? console.log('it is odd') : console.log('it is even');
};
isEvenOrOdd(10808);

// to make this work it must be in event handler because this will be excuted as we start the app and will be overwritten as we login
// [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
//   if (i % 2 === 0) row.style.backgroundColor = 'orangered';
// });

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    // 0,2,4,6,8,10.....
    if (i % 2 === 0) row.style.backgroundColor = 'orangered';
    // 0,3,6,9.......
    if (i % 3 === 0) row.style.backgroundColor = 'blue';
  });
});

////////////////////////////////////////////////
// Numeric Separators
const diameter = 287_460_000_000;
console.log(diameter); // 287460000000

const priceCents = 345_99;
console.log(priceCents);

const transferFee1 = 15_00;
const transferFee2 = 1_500;

const PI = 3.1415;
console.log(Number('233_333'));
console.log(Number.parseFloat('233_333'));

////////////////////////////////////
// BigInt
console.log(2 ** 53 - 1);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);

// not accurate
console.log(347997543593497857398257983753894n);
console.log(BigInt(347997543593497857398257983753894));
console.log(BigInt(34799754354));

console.log(23434234n * 3838458n);

const huge = 98345898347589754385839475n;
const num = 23;
console.log(huge * BigInt(num));
// console.log(+huge * num); // Cannot convert a BigInt value to a number

// Divisions
// it's just removes the decimal part like trunc function
console.log(11n / 3n);
console.log(11 / 3);

///////////////////////////////////////////
// Creating Dates
// Four 4 ways creating a date in javascript
console.clear();
// 1.
const now = new Date();
console.log(now);

// 2.  by giving a string
console.log(new Date('Aug 02 2022 18:05'));
console.log(new Date('Aug 02'));
console.log(new Date('December 23, 02'));

// 3. year, month(zero based), day, hour, min, sec
console.log(new Date(2023, 11, 8, 19, 12, 59, 93));
console.log(new Date(2023, 0, 8));

// 4. the amount of milliseconds passed since of the Unix time which is January 1, 1970
console.log(new Date(0)); // zero milliseconds after unix time
console.log(new Date(3 * 24 * 60 * 60 * 1000)); // 3 days after unix time and day * hour * min * sec * milli
// the result of this number is called the timestamp of the day 3

// Working with dates and dates have their own methods
console.clear();
const future = new Date(2029, 11, 8, 19);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth()); // Zero-based
console.log(future.getDate()); // from 30 days
console.log(future.getDay()); // Zero-based and sunday is 0
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());
console.log(new Date(future.getTime()));

// READ the current timestamp and timestamps are very important
console.log(Date.now());

future.setTime(75889743185498);
future.setFullYear(2030);
console.log(future);
*/

const future = new Date(2029, 11, 8, 19);
console.log(+future);

const days = (date1, date2) =>
  Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));

console.log(days(new Date(2037, 3, 14), new Date(2037, 3, 4)));

console.clear();
const num = 2884764.23;

const options = {
  style: 'currency',
  unit: 'celsius',
  currency: 'EUR',
  useGrouping: false,
};
console.log('US:', new Intl.NumberFormat('en-US', options).format(num));
console.log('Germany:', new Intl.NumberFormat('de-DE', options).format(num));
console.log('syria:', new Intl.NumberFormat('ar-SY', options).format(num));
console.log(
  'Browser:',
  navigator.language,
  new Intl.NumberFormat(navigator.language, options).format(num)
);

/////////////////////////////////////////
// Syntax - setTimeout
// setTimeout(() => {}, timeout);
const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log('Here is your pizza', ing1, ing2),
  3000,
  ...ingredients
);

if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);
pizzaTimer;

// setTimeInterval
// setInterval(() => {
//   const now = new Date();
//   console.log(
//     now.getHours(),
//     now.getMinutes(),
//     +`${now.getSeconds()}`.padStart(2, 0)
//   );
// }, 3000);
