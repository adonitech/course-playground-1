'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
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

const movements = [200, , 450, -400, 3000, -650, -130, 70, 1300];

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
  <div class="movements__row">
    <div class="movements__type movements__type--${type}">
          ${i + 1} ${type}
    </div>
    <div class="movements__value">${mov}€</div>
  </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
    containerMovements.insertAdjacentElement('');
  });
};
const calcDisplayBalance = function (account) {
  account.balance = account.movements.reduce((acc, cur) => (acc += cur), 0);

  labelBalance.textContent = `${account.balance}€`;
};
const calcDisplaySummary = function (account) {
  const incomes = account.movements
    .filter(mon => mon > 0)
    .reduce((acc, mon) => acc + mon, 0);
  labelSumIn.textContent = incomes;

  const out = account.movements
    .filter(mon => mon < 0)
    .reduce((acc, mon) => acc + mon, 0);
  // READ READ
  // labelSumOut.textContent = out.toString().replace('-', '');
  labelSumOut.textContent = Math.abs(out);

  const interest = account.movements
    .filter(mon => mon > 0)
    .map(mov => (mov * account.interestRate) / 100)
    .filter(mon => mon >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}`;
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
  displayMovements(acc.movements);
  // Display balance
  calcDisplayBalance(acc);
  // Display summary
  calcDisplaySummary(acc);
};
// Event handler
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.slice(
      0,
      currentAccount.owner.indexOf(' ')
    )}`;
    containerApp.style.opacity = 100;

    // Clear input fields
    // inputLoginUsername.value = '';
    // inputLoginPin.value = '';
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Display UI
    updateUI(currentAccount);
  }
  console.log(currentAccount.owner, inputLoginUsername.value);
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
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
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    // might be BUG TODO
    // updateUI(receiverAcc);
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('adoni');

  const loan = Number(inputLoanAmount.value);

  if (currentAccount.movements.some(mov => mov >= loan * 0.1)) {
    console.log(loan);
    currentAccount.movements.push(loan);
    updateUI(currentAccount);
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  console.log('right', currentAccount);
  console.log(inputCloseUsername.value);
  console.log(inputClosePin.value);

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
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
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

/*
/////////////////////////////////////////////////
// Simple Array Methods

// SLICE
let arr = ['s', 'p', 'q', 'r', 't'];
console.log(arr.slice(2)); // Output ['q', 'r', 't']
console.log(arr.slice(2, 4)); // Output ['q', 'r'] 4 is not included!
console.log(arr.slice(-1)); // Output ['t'] -1 is always the last element
console.log(arr.slice(0, -2)); //['s', 'p', 'q'] it doesn't extract the last 2 elements, Ok?
console.log(arr.slice()); // Without any argument to create a shallow copy of an array // Output

// SPLICE
// Splice same as the slice except mutating the original array
// console.log(arr.splice(2));
arr.splice(-1); // last element is deleted
console.log(arr); // so now the extracted part is gone
// and another thing is that
arr.splice(1, 2); // READ READ 1 is the start index same as slice but 2 is the NUMBER of elements that we want to delete at this time 2 so that means it will delete [p, q]
console.log(arr);
console.clear();

// REVERSE
// reverse DOES mutate the array
arr = ['s', 'p', 'q', 'r', 't'];
const arr2 = ['e', 'd', 'c', 'b', 'a'];
arr2.reverse();
console.log(arr2); // Mutated by reverse

// CONCAT
// does not mutate
// READ READ Choose what you want its just matter of personal preference
const letters = arr.concat(arr2); // Same as
console.log(letters);
console.log([...arr, ...arr2]);

// jOIN
console.log(letters.join('-')); // Output is STRING: s-p-q-r-t-a-b-c-d-e

/////////////////////////////////////////////////
// The new at Method (ES2022)
const arra = [23, 11, 53];
console.log(arra[0]);
console.log(arra.at(0));

// getting the last element (Traditionally)
console.log(arra.slice(-1)[0]);
console.log(arra[arra.length - 1]);
// Modern way
console.log(arra.at(-1));

// WORKS also on strings
console.log('Adoni'.at(-1));

///////////////////////////////////////////////////
// forEach Loop
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// TODO Add all of the array elements
for (const move of movements) {
  if (move > 0) {
    console.log(`Money Deposited ${move}`);
  } else {
    console.log(`Money Withdrawn ${move.toString().replace('-', '')}`);
  }
}
// forEach requires a callback function that means forEach is a Higher-Order function
// IMPORTANT - the callback function will be called on each iteration
// in each iteration forEach will pass in the current element of the array as an argument
movements.forEach(function (move, index, array) {
  // console.log(move, index, array);
  if (move > 0) {
    console.log(`forEach${index + 1}: Money Deposited ${move}`);
  } else {
    console.log(
      `forEach${index + 1}: Money Withdrawn ${move.toString().replace('-', '')}`
    );
  }
});
//READ we can pass 3 parameters to forEach and the order of parameters MATTERS
// first parameter: current Element
// second parameter: current Index
// last parameter: The entire Array

// When to use forEach and When to use for-of loop
//READ READ READ The subtle difference is that you CANNOT use continue and break statements in forEach, it will always loop over the entire array
// but they work in for of loop so if you want to break out of the loop you must use for of loop

// forEach with Maps and Sets
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
currencies.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
});
// Set
// but in sets we don't need key and map parameters because
const currenciesUnique = new Set(['USD', 'GDP', 'USD', 'EUR']);
currenciesUnique.forEach((value, _, map) => {
  console.log(map);
  console.log(`${value}: ${value}`);
});
// we can use underscore in parameter meaning that a variable is completely unnecessary
*/

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀


const checkDogs = function (dogsJulia, dogsKate) {
  const julia = [...dogsJulia];
  julia.shift();
  julia.splice(-2);
  const dogsJuliaCorrected = [...julia];
  dogsJuliaCorrected.concat(dogsKate).forEach((dog, no) => {
    if (dog >= 3) {
      console.log(`Dog number ${no + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${no + 1} is still a puppy 🐶`);
    }
  });
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
*/
/* 
//////////////////////////////////
// The map method
// Used to loop over arrays same as forEach but returns a brand new array and don't modify the original array
// We need to return keyword READ READ READ
console.log(movements);
const usMovements = movements.map(value => Math.abs(Math.floor(value * 1.1)));
console.log(usMovements);

const movementsDescriptions = movements.map(
  (mov, i) => `movements${i + 1}: Money ${mov > 0 ? 'Deposit' : 'Withdrew'}`
);

////////////////////////////////////
// The filter method
const deposits = movements.filter(mov => mov > 0);
const withdrawal = movements.filter(mov => mov < 0);
console.log(deposits);
console.log(withdrawal);

/////////////////////////////////////////
// The reduce
// READ READ READ
// The syntax
// reduce(callbackFn)
// reduce(callbackFn, initialValue); initialValue is optional

console.log(movements);
// the first parameter is the accumulator which then be returned later on and Second parameter is the value, 3rd index
const balance = movements.reduce((acc, cur) => (acc += cur), 0);
console.log(balance);

// Maximum value
const maximum = movements.reduce((accumulator, currentValue) => {
  if (currentValue < accumulator) return accumulator;
  else return currentValue;
}, movements[0]);
console.log(maximum);
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
/* 
console.clear();

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAges.filter(age => age >= 18);
  // const humanAverage =
  //   adults.reduce((acc, age) => acc + age, 0) / adults.length;
  // READ READ READ
  const humanAverage = adults.reduce(
    (acc, age, _, arr) => acc + age / arr.length,
    0
  );
  console.log(humanAverage);
};
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// Challenge #3
const calcAverageHumanAge = function (ages) {
  const humanAges = ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, _, arr) => acc + age / arr.length, 0);
  // const humanAverage =
  //   adults.reduce((acc, age) => acc + age, 0) / adults.length;
  // READ READ READ

  console.log(humanAges);
};
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);


// Find method
const firstWithdrawal = movements.find(mov => mov > 0);
const withdrawls = movements.filter(mov => mov > 0);
console.log(firstWithdrawal, withdrawls);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(accounts);
for (const acc of accounts) {
  if (acc.owner === 'Jessica Davis') break;
}

///////////////////////////////////////
// The New findLast and findLastIndex Methods

console.log(movements);
const lastWithdrawal = movements.findLast(mov => mov < 0);
console.log(lastWithdrawal);

// 'Your latest large movement was X movements ago'

const latestLargeMovementIndex = movements.findLastIndex(
  mov => Math.abs(mov) > 1000
);
console.log(latestLargeMovementIndex);
console.log(
  `Your latest large movement was ${
    movements.length - latestLargeMovementIndex
  } movements ago`
);

// SOME AND EVERY METHODS
console.log(movements);
console.log(movements.includes('-130'));

const anyWithdrawal = movements.some(mov => mov < 0);
console.log(anyWithdrawal);

console.log(movements.every(mov => mov > 0));


const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[1, [2, 3]], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

// const allAccountMovements = accounts.map(acc => acc.movements);
const allAccountMovements = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((accumulator, value) => accumulator + value);
console.log(allAccountMovements);

const overalBalance = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, val) => acc + val);
console.log(overalBalance);
*/

///////////////////////////////////////
// Coding Challenge #4

/*
This time, Julia and Kate are studying the activity levels of different dog breeds.

YOUR TASKS:
1. Store the the average weight of a "Husky" in a variable "huskyWeight"
2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)
3. Create an array "allActivities" of all the activities of all the dog breeds
4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.
5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".

BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.

TEST DATA:

const breeds = [
  {
    breed: 'German Shepherd',
    averageWeight: 32,
    activities: ['fetch', 'swimming'],
  },
  {
    breed: 'Dalmatian',
    averageWeight: 24,
    activities: ['running', 'fetch', 'agility'],
  },
  {
    breed: 'Labrador',
    averageWeight: 28,
    activities: ['swimming', 'fetch'],
  },
  {
    breed: 'Beagle',
    averageWeight: 12,
    activities: ['digging', 'fetch'],
  },
  {
    breed: 'Husky',
    averageWeight: 26,
    activities: ['running', 'agility', 'swimming'],
  },
  {
    breed: 'Bulldog',
    averageWeight: 36,
    activities: ['sleeping'],
  },
  {
    breed: 'Poodle',
    averageWeight: 18,
    activities: ['agility', 'fetch'],
  },
];
// 1.
const huskyWeight = breeds.find(dog => dog.breed === 'Husky').averageWeight;

// 2.
const dogBothActivities = breeds.filter(
  obj =>
    obj.activities.some(run => run === 'running') &&
    obj.activities.some(run => run === 'fetch')
);
console.log(dogBothActivities);

// 3.
const allActivities = breeds.reduce((acc, { activities }) => {
  acc.push(...activities);
  return acc;
}, []);
console.log(allActivities);

// 4.
const uniqueActivities = new Set(allActivities);
console.log(uniqueActivities);
// console.clear();

// 5.
const swimming = breeds
  .filter(({ activities }) => activities.includes('swimming'))
  .reduce((all, cur) => {
    all.push(...cur.activities);
    return all;
  }, []);
console.log(swimming);
const swimmingAdjacent = new Set(swimming);
swimmingAdjacent.delete('swimming');
const ad = [...swimmingAdjacent];
console.log(ad);

// 6.
const averageWeight = breeds.every(obj => obj.averageWeight >= 10);

console.log(averageWeight);

// 7.
const active = breeds.some(obj => obj.activities.length >= 3);
console.log(active);

// Bonus
console.clear();
// My solution but actually not my solution but first i didn't understand the challenge and that was a problem
const j = breeds.map(breed => breed.averageWeight);
console.log(j);
console.log(Math.max(...j));

// Jonas solution
const fetchWeight = breeds.filter(breed => breed.activities.includes('fetch'));
console.log(fetchWeight);

const fetchWeights = fetchWeight.map(breed => breed.averageWeight);
console.log(fetchWeights);

const heaviestFetchBreed = Math.max(...fetchWeights);
console.log(heaviestFetchBreed);


const owners = ['Jonas', 'Adoni', 'Zach', 'Eda'];

console.log(owners.sort());
console.log(owners);

console.log(movements);
// Ascending order
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
movements.sort((a, b) => a - b);
console.log(movements);

// Descending order
// movements.sort((a, b) => {
//   if (a > b) return -1; // a is bigger so it must keep it before b // keep the order
//   if (a < b) return 1;
// });
movements.sort((a, b) => b - a);
console.log(movements);

const x = new Array(7).fill(1, 3);
console.log(x);
const z = Array.from(
  { length: 100 },
  (cur, i) => (cur = Math.floor(Math.random() * 6 + 1))
);
console.log(z);
console.log([1, 2, 3].fill('x', 1, 3));
console.log(Array.from({ length: 7 }, value => (value = 1)));
// console.log(Array.from(document.querySelectorAll('.movements__value')));
// document.querySelectorAll('.movements__value').forEach(el => console.log(el));
// labelWelcome.style.opacity = 0.5;
labelWelcome.addEventListener('click', function () {
  const arr = Array.from(document.querySelectorAll('.movements__value'), el =>
    Number(el.textContent.replace('€', ''))
  );
  console.log(arr);
  // console.log(arr.map(el => Number(el.textContent.replace('€', ''))));

  const arr2 = [...document.querySelectorAll('.movements__value')].map(
    el => el.textContent
    // Number(el.textContent.replace('€', ''))
  );
  console.log(`Array 2: ${arr2}`, arr2);
});

/////////////////////////////////////
// Array Practice
// 1.
const deposited = accounts
  .flatMap(obj => obj.movements)
  .filter(mov => mov > 0)
  .reduce((acc, cur) => acc + cur, 0);
console.log(deposited);

// 2
// const numDeposits1000 = accounts.flatMap(obj => obj.movements).filter(mov => mov >= 1000).length;

// READ the count variable is something like a variable outside of the loop so we can use it for anything we want
const numDeposits1000 = accounts
  .flatMap(obj => obj.movements)
  .reduce((count, cur) => {
    // console.log('count', count, cur);
    // READ prefixed ++ operator returns the incremented value
    // while a++ operator returns the previous value
    return cur >= 1000 ? ++count : count;
  }, 0);
console.log(numDeposits1000);

// 3.
const { deposits, withdrawls } = accounts
  .flatMap(obj => obj.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawls += cur);
      sums[cur > 0 ? 'deposits' : 'withdrawls'] += cur;
      return sums;
    },
    {
      deposits: 0,
      withdrawls: 0,
    }
  );

console.log(deposits, withdrawls);

// 4.

const convertTitleCase = function (title) {
  const capitilize = el =>
    exceptions.includes(el) ? el : el[0].toUpperCase() + el.slice(1);

  const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with', 'and'];

  const titleCase = title.toLowerCase().split(' ').map(capitilize).join(' ');
  return capitilize(titleCase);
};
console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));
*/

///////////////////////////////////////
// Non-Destructive Alternatives: toReversed, toSorted, toSpliced, with

/// BUG BUG BUG BUG BUG BUG TODO TODO TODO
// toReversed, toSorted, toSpliced won't work here so fix by watching YouTube video
// if (!Array.prototype.toReversed) {
//   Array.prototype.toReversed = function () {
//     return Array.from(this).reverse();
//   };
// }
// if (!Array.prototype.toSorted) {
//   Array.prototype.toSorted = function () {
//     return Array.from(this).sort();
//   };
// }
// console.log(movements);
// console.log(movements.toReversed(), [...'love'].toReversed());
// console.log(movements);
// const reversedMov = movements.toReversed();
// console.log(reversedMov);

// // toSorted (sort), toSpliced (splice)

// // movements[1] = 2000;
// const newMovements = movements.with(1, 2000);
// console.log(newMovements);

// console.log(movements);

///////////////////////////////////////
// Coding Challenge #5

/* 
Julia and Kate are still studying dogs. This time they are want to figure out if the dogs in their are eating too much or too little food.

- Formula for calculating recommended food portion: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
- Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
- Eating an okay amount means the dog's current food portion is within a range 10% above and below the recommended portion (see hint).

YOUR TASKS:
1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion (recFood) and add it to the object as a new property. Do NOT create a new array, simply loop over the array (We never did this before, so think about how you can do this without creating a new array).
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple users, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much (ownersTooMuch) and an array with all owners of dogs who eat too little (ownersTooLittle).
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is ANY dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether ALL of the dogs are eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Group the dogs into the following 3 groups: 'exact', 'too-much' and 'too-little', based on whether they are eating too much, too little or the exact amount of food, based on the recommended food portion.
9. Group the dogs by the number of owners they have
10. Sort the dogs array by recommended food portion in an ascending order. Make sure to NOT mutate the original array!

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John', 'Leo'] },
  { weight: 18, curFood: 244, owners: ['Joe'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

GOOD LUCK 😀
*/
console.clear();
// recommendedFood = weight ** 0.75 * 28

// TODO TODO do the
