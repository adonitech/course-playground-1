'use strict';
// Challenge 1: Tricky Array Destructuring
const numbers = [1, [2, 3, [4, 5]], 6, 7];

// just as REFERENCE
// const nons = [1, 2, [3, 4, [5, 6]]];
// const [onee, twoo, [threee, fourr, [fivee, sixx]]] = nons;
// console.log(onee, twoo, threee, fourr, fivee, sixx);

const [one = -1, [, three = -1, [, five = -1]], , seven = -1] = numbers;
console.log(one, three, five, seven);
//////////////////////////////////////////

// Challenge 2: Swapping
let first = 'apple'; // first to orange
let second = 'Mango'; // second to apple
let third = 'Orange'; // third to Mango

// just solution READ
// const obj = { first: 'orange', second: 'mango', third: 'apple' };
// ({ first, second, third } = obj);
// console.log(first, second, third);

// Alternative way to solve this problem is FIXME
[first, second, third] = [third, first, second];
console.log(first, second, third);

// Challenge 3: Nested Object Destructuring
const student = {
  name: 'Alex',
  scores: {
    math: 95,
    science: 90,
    languages: {
      english: 85,
      spanish: 88,
    },
  },
  activities: ['soccer', 'chess', 'coding'],
};

const {
  name: studentName,
  scores: {
    math: mathScore,
    languages: { spanish: spanishScore },
  },
  activities: [, favouriteActivity],
} = student;
console.log(studentName, mathScore, spanishScore, favouriteActivity);

// Challenge 4: Destructuring with Functions
function getUser() {
  return {
    id: 42,
    name: 'John Doe',
    preferences: {
      theme: 'dark',
      notifications: true,
    },
  };
}
const {
  id: userId,
  preferences: { theme: userTheme = 'light', notifications: notifyMe },
} = getUser();
getUser();
console.log(userId, userTheme, notifyMe);

function displayUser({
  id: userId,
  preferences: { theme: userTheme = 'light', notifications: notifyMe },
}) {
  console.log(
    `I Adoni with badge number of ${userId} have a preference of ${userTheme} and i needed a lots of notifications and that's fucking ${notifyMe}`
  );
}
displayUser(getUser());
/////////////////////////////////////
// Challenge 5: Advanced Array Destructuring with Rest Operator

const colors = ['red', 'green', 'blue', 'yellow', 'pink'];
const [primary, ...middle] = colors;
const secondary = middle.pop();

console.log(primary, secondary);
console.log(middle);
///////////////////////////////////////////////
// Challenge 6: Dynamically Destructuring
const settings = {
  mode: 'dark',
  layout: 'grid',
  colors: {
    background: 'black',
    text: 'white',
  },
};
const key1 = 'background';
const key2 = 'text';
// console.log([key1]);
const { ['background']: bgColor, key2: textColor } = settings.colors;
console.log(bgColor, textColor);

// Mine
const sumAll = function ([...just]) {
  // just;
  console.log(just);
  let sum = 0;
  for (let i = 0; i < just.length; i++) {
    sum += just[i];
  }
  return sum;
};

// Chatgpt's one
function sum(...numbers) {
  console.log(numbers);
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log('sum  ' + sum(1, 2, 3, 6, 6, 6, 6, 6, 6, 6, 6, 100));
console.log('sumAll  ' + sumAll([1, 2, 3, 6, 6, 6, 6, 6, 6, 6, 6, 100]));
