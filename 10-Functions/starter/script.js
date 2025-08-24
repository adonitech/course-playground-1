'use strict';
/*
const flight = 'LG123';
const adoni = {
  name: 'Adoni David',
  passport: 84538753895894375,
  fullName: {
    firstName: 'Adoni',
    lastName: 'David',
  },
};
const adoniShallowCopy = adoni;
const adoniDeepCopy = structuredClone(adoni);

adoniShallowCopy.fullName.firstName = 'Eden';

const checkIn = function (flightNum, passenger) {
  flightNum = 'LY999';
  passenger.name = 'Mrs ' + passenger.name;

  if (passenger.passport === 84538753895894375) {
    console.log('Checked In');
  } else {
    alert('Wrong Passport!');
  }
};
checkIn(flight, adoniShallowCopy);
console.log(flight);
console.log(adoni);
console.log(adoniShallowCopy);
console.log(adoniDeepCopy);

////////////////////////////////////
// Functions Accepting Another Functions
const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  // fn = upperFirstWord(str);
  console.log(`Transformed by: ${fn.name}`);
  console.log(`Transformed string: ${fn(str)}`);
};
transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// Chatgpt's challenge
// const users = [
//   { name: 'Liya', age: 22 },
//   { name: 'Jonas', age: 17 },
//   { name: 'Sara', age: 19 },
// ];

// function filterUsers(users, testFunction) {
//   return testFunction(users);
// }

// function testFunction(usersArray) {
//   const arr = [];
//   for (const user of usersArray) {
//     if (user.age >= 18) {
//       arr.push(user.name);
//     }
//   }
//   return arr;
// }
// console.log(filterUsers(users, testFunction));

//////////////////////////////////////
// Functions Returning Functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
    // return 'Love';
  };
};

const greetArr = greeting => name => {
  console.log(`${greeting} ${name}`);
};

const greetHey = greet('Hey');
console.log(greetHey(undefined));
greetHey('Jonas');
greetHey('adoni');
greetHey('jasmin');

greet('Hello')('Adonii');
greetArr('Hi')('Adonii');


//////////////////////////////////////
// The call and apply Methods
// Lufthansa the biggest European Airline group

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
const book = lufthansa.book;

lufthansa.book(239, 'Adoni');
lufthansa.book(632, 'Adoniyas David');
console.log(lufthansa.bookings);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
  book,
};

// Call and Apply Methods
// READ READ READ READ READ READ
// Another way of doing this
// i completely don't understand why the instructor do this while he can do this, let's leave it is because of he wanted to teach us about it
// eurowings.book(333, 'Eden'); // he can do this but he did this
book.call(eurowings, 333, 'Eden');
book.apply(lufthansa, [232, 'Dawit Negash']);
// Both .call and .apply are the same except that the apply method takes the function argument as an array
// But we can do this on call method
book.call(lufthansa, ...[255, 'Rediet David']);
console.log(eurowings);
console.log(lufthansa);

// Bind Method
const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'SW',
  bookings: [],
  book,
};

// Now this bookSW variable is now bind to the swiss object meaning that
const bookSW = book.bind(swiss);
const bookLH = book.bind(lufthansa);
const bookEW = book.bind(eurowings);
bookSW(756, 'Eden Yetesha');

//READ READ Set in stone or preset some arguments like this
// the first argument will be 23 so we only need to specify the name argument when we call the function
const bookSW23 = book.bind(swiss, 23);
bookSW23('Jonas');
bookSW23('Martha');

// The this keyword with Event Listeners
lufthansa.planes = 200;
lufthansa.buyPlane = function () {
  this.planes++;
  console.log(this);
  console.log(this.planes);
};
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application means that some parameters are already defined

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(400));

// const addT = function(rate, value)
const addV = function (value) {
  return addTax(0.23, value);
};
console.log(addV(400));

*/

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀


const poll = {
  question: 'What is your favourite pg lang?',
  options: ['0: JS', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = prompt(
      `${this.question.padStart(
        this.question.length + 5,
        ' '
      )}\n${this.options[0].padStart(
        this.options[0].length + 5,
        ' '
      )}\n${this.options[1].padStart(
        this.options[1].length + 5,
        ' '
      )}\n${this.options[2].padStart(
        this.options[2].length + 5,
        ' '
      )}\n${this.options[3].padStart(
        this.options[3].length + 5,
        ' '
      )}\n${'Write option number'.padStart(24, ' ')}`
    );
    if (answer > 3 || answer < 0) {
      alert('Please answer from the given choices');
      this.registerNewAnswer();
    } else {
      this.answers[answer]++;
      console.log(answer, this.answers);
      this.displayResults(typeof answer);
    }
  },
  displayResults(type = '1') {
    if (typeof type === 'string') {
      console.log(`Poll results are 13, 2, 4, 1`);
    } else if (typeof type === 'number') {
      console.log(this.answers);
    }
  },
};
poll.registerNewAnswer();
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

*/
/////////////////////////////////
// IIFE (Immediately Invoked Function Expression)
(function () {
  console.log('This will never again run!');
  const isPrivate = 12;
})();

// Arrow function
// We don't get an error
() => console.log('Arrow will never allow this to run again')();
// this is the correct version
(() => console.log('Arrow will never allow this to run again'))();

// READ Why actually this method invented
// variables defined in this scope are actually private b/c the function creates it's own scope so we can't access it. code that found in the function can be say the data is encapsulated. E.g, isPrivate is encapsulated by the function;
// Data encapsulation and Data Privacy is Extremely important in Programming
//READ it's important to hide variables in scope and these are a good tool to do this

// But after ES6 there is a block scope so if we want to create a new scope we just do this we don't really need to use IIFE
{
  const isPrivate = 232;
}

///////////////////////////////////////////
// Closures
// let counter = 0;

// Function to increment counter
function add() {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  };
}

// Call add() 3 times
const some = add();
some();
some();
some();

console.dir(some);
// BUG couldn't see [[Scopes]] in console.dir()

// console.log(counter);

/////////////////////////////////////////////////
// Closures Examples

// Example 1
let f;
const g = () => {
  const a = 23;

  f = () => {
    console.log(a * 3);
  };
};
const h = () => {
  const b = 11;
  f = () => {
    console.log(b * 2);
  };
};
g();
f();

h();
f();

// Example 2

const boardPassengers = (n, wait) => {
  const perGroup = n / 3;

  setTimeout(() => {
    console.log(`We're now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, 5000);

  console.log(`Will start boarding in ${wait} sec`);
};
boardPassengers(600, 10);

console.log('Adoni');
console.clear();

///////////////////////////////////////
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.body.addEventListener('click', () => {
    header.style.color = 'blue';
  });
})();
