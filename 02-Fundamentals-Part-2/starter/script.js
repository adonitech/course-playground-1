'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log("I can drive off:");

// const interface = "Audio";
// const private = "Audio";
// const if = 534;

/// 03 - Functions

function logger() {
  console.log("i CAN drive every car for my entire life.");
}
// This logger function doesn't return anything and so that's why we don't capture it in any varible because it doesn't give any value but actually it does give undefined and so of course we don't capture that undefined value
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  // console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  // console.log(juice);
  return juice;
}

// Capturing the value that was returned in variable
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

// Without capturing like directly log to the console
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(9, 5);
console.log(appleOrangeJuice);

// Once the function has been excuted this code here(fruitProcessor(5, 0)) is replaced by the result of the function and in this case that would be the string of juice that we produced and if we want to you that returned value, we need to store it in a variable

console.log is a built in function

// Conclusion 
//  Functions allow us to write more maintainable code because with functions we can create reusable chunks of code instead of having manually write the same code over and over again. this is the most important thing about functions


// Function Declaration
// We can call fun De before they are defined
const calcAge(2000)1 = calccalcAge(2000)1(2000);
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

// Function Expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(2000);
console.log(age1, age2);


// Arrow Function
const calcAge3 = (birthYear) => 2037 - birthYear;

const age3 = calcAge3(2000);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return age, retirement;
  return ` ${firstName} retires in ${retirement} years. `;
};

const yearsLeft = yearsUntilRetirement(2000, "Adoni");
console.log(yearsLeft);


const cutFruitPieces = function (fruit) {
  return fruit * 4;
};

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
  return juice;
}

const proJuice = fruitProcessor(4, 7);
console.log(proJuice, fruitProcessor(2, 3));

/////////////////////////////////////////////////
// Reviewing Functions
const calcAge = (birthYear) => 2037 - birthYear;

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    // Demonstrating that the return keyword immediately exits the function

    return retirement;
    console.log(`${firstName} retires in ${retirement} years.`);
  } else {
    console.log(`${firstName} retires in ${retirement} years.`);
    return -1;
  }
  // return ` ${firstName} retires in ${retirement} years. `;
};

console.log(yearsUntilRetirement(2000, "Adoniiii"));
console.log(yearsUntilRetirement(1950, "Adoniiii"));

////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//// CHALLENGE NO. 1
const calcAverage = (game1, game2, game3) => {
  return (game1 + game2 + game3) / 3;
};

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
  } else if (avgKoalas >= avgDolphins * 2) {
    return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
  } else {
    return `No one wins the game.`;
  }
};
// TEST #1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(checkWinner(scoreDolphins, scoreKoalas));

// TEST #2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(checkWinner(scoreDolphins, scoreKoalas));

///////////
// INTRODUCTION TO ARRAYS

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const year = new Array(1991, 1878, 1877, 2000, 2999);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends[friends.length - 1]);

friends[2] = "jack";
console.log(friends[2]);

const firstName = "Adoni";
const adoni = [firstName, "Dawit", 2025 - 2006, "teacher", friends];
console.log(adoni[adoni.length - 1], adoni, adoni.length);

// Exercise
const calcAge = (birthYear) => 2037 - birthYear;
const years = new Array(1991, 1982, 1992, 2000, 2024);

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = new Array(
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1])
);
console.log(ages);


/////////////////////////////////////////////
// Basic Array Operations or methods

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);
////  Adding elements to the array
// push is add at the end of the array and returns the length of array and if we want to see the returned value we must capture it in variable
const newLength = friends.push("Jay"); // Last
console.log(newLength, "Eda", friends);

// Unshift the same as push but at beginning of the array
friends.unshift("David"); // First
console.log(friends);

//// Removing Elements from the array
// pop will remove the last element from the array and returns the popped element or the element that was removed from the array. BUT we don't pass any argument because it's unnecessary it just take out the last element and if the array is empty and it returns undefined and the array is not modified
const popped = friends.pop(); // Last
console.log(popped);
console.log(friends);

console.log(friends.pop());
console.log(friends);

// shift same as pop but it works for first element in the array
console.log(friends.shift()); // First
console.log(friends);
/////////////////////////////////////////

// indexOf tells us if the element is in the array or not, if it is returns where the element is located based on zero but if it is not in the array returns -1

console.log(friends.indexOf("Michael")); // returns 0 b/c that's where it is located Michael
console.log(friends.indexOf("Bob")); // returns -1 b/c the element is not present in the array

/// includes same as indexOf but it returns the boolean and it uses strict equality for comparison that means it doesn't do type coersion and we can use to write conditionals so that's one of the very useful application of this method

console.log(friends.unshift(23));
console.log(friends.includes("Steven")); // returns true
console.log(friends.includes("Bob")); // returns false
console.log(friends);
console.log(friends.includes("23")); // false because string 23 and number 23 is not equal in strict equality that's why it returns false as i said it doesn't do type coersion

friends.includes("Steven")
  ? console.log("You have a friend called Steven")
  : console.log("You don't have a friend called Steven");
///////////////////////////////////////////

// CODING CHALLENGE #2

const calcTip = function (bill) {
  if ((bill >= 50 && bill <= 300) >= 0) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
};
console.log(calcTip(1000));

const bills = new Array(100, 300, 150, 1110, 1229, 48);
// const tips = [calcTip(bills[0]), ]
for (let tip = 0; tip <= bills.length - 1; tip++) {
  const tips = [calcTip(bills[tip])];
  console.log(tips);
}
console.log(calcTip(100));
const bill = [calcTip(100), calcTip(100 - 160), calcTip(1000)];
console.log(bill);
///////////////////////////////////////////



const adoniArray = [
  "Adoniyas",
  "David",
  2025 - 2006,
  "Student",
  ["Bereket", "Dutu", "Kiya", "Besuti"],
];

const adoniObj = {
  firstName: "Adoniyas",
  middleName: "David",
  age: 2025 - 2005,
  job: "Student",
  friends: ["Bereket", "Fiker", "Kiya", "Besuti"],
};
console.log(adoniObj);
console.log(adoniObj.middleName);
console.log(adoniObj["middleName"]);

const nameKey = "Name";
console.log(adoniObj["middle" + nameKey]);
console.log(adoniObj["first" + nameKey]);

// const interestedIn = prompt(
// "What do you want to know about Adoni? Choose between firstName, middleName, age, job, and friends..."
// );
// if (adoniObj[interestedIn]) {
//   console.log(adoniObj[interestedIn]);
// } else {
//   console.log(
//     `There is no information about ${
//       adoniObj["firstName"]
//     }${"'s"} ${interestedIn}. Please, Choose between firstName, middleName, age, job, and friends`
//   );
// }

adoniObj.location = "Ethiopia";
adoniObj["telegram"] = "@adfirst1";
console.log(adoniObj);

console.log(
  `${adoniObj["firstName"]} has ${adoniObj["friends"].length} friends, and his best friend is called ${adoniObj["friends"][1]}`
);

//////////////////////////////////////////
// 09 - Object methods or the this keyword

const adoni = {
  firstName: "Adoniyas",
  middleName: "David",
  birthYear: 2005,
  job: "Student",
  friends: ["Bereket", "Fiker", "Kiya", "Besuti"],
  hasDriversLicense: false,

  // calcAge: function (birthYear) {
  //   return 2025 - birthYear;
  // },
  // calcAge: function () {
  //   // return 2025 - adoni.birthYear;
  //   // console.log(this);
  //   return 2025 - this.birthYear;
  // },
  calcAge: function () {
    // return 2025 - adoni.birthYear;
    // console.log(this);
    this.age = 2025 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
  },
};
adoni.calcAge();
// console.log(adoni.calcAge());
console.log(adoni.getSummary());
// console.log(adoni.calcAge());
// console.log(adoni.calcAge());
// console.log(adoni["calcAge"]());


/////////////////////////////////////////////
// Coding Challenge #3

const mark = {
  firstName: "Mark",
  lastName: "Miller",
  height: 1.69,
  weight: 78,
  calcBMI: function () {
    this.BMI = Math.round(this.weight / this.height ** 2);
    return this.BMI;
  },
  getSummary: function () {
    return `${this.firstName} weights ${this.weight} kg and is ${this.height} m tall. `;
  },
};
const john = {
  firstName: "John",
  lastName: "Smith",
  height: 1.95,
  weight: 92,
  calcBMI: function () {
    this.BMI = Math.round(this.weight / this.height ** 2);
    return this.BMI;
  },
  getSummary: function () {
    return `${this.firstName} weights ${this.weight} kg and is ${this.height} m tall. `;
  },
};
mark.calcBMI();
john.calcBMI();
console.log(john.BMI, mark.BMI, mark.getSummary(), john.getSummary());



// From fundamentals part - 01
///////////////////////////////////////////
// The Switch STATEMENT

// switch matches with strict equality and without the break the next case will be excuted even if doesn't match the case
// if there is no default and no cases match the program go to next statement and ignore the switch statement or it will consider it there is no switch statement written
const day = "monday";

switch (day) {
  case "monday":
    console.log("On monday plan course structures");
    console.log("go to the gym");
    break;
  case "tuesday":
    console.log("prepare theory videos");
    break;

  // for both wednesday and thursday ' write code examples ' will be applied like if the case matches with wednesday it prints 'Write code examples' and if the case matches for thursday it also prints 'Write code examples'
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day!");
}

if (day === "monday") {
  console.log("On monday plan course structures");
  console.log("go to the gym");
} else if (day === "tuesday") {
  console.log("prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "sunday" || day === "saturday") {
  console.log("Enjoy the weekend :D");
} else {
  console.log("Not a valid day!");
}


////////////////////////////////////////////////
// Iteration: The for loop

// console.log("Lifting weights repetition 1");
// console.log("Lifting weights repetition 2");
// console.log("Lifting weights repetition 3");
// console.log("Lifting weights repetition 4");
// console.log("Lifting weights repetition 5");
// console.log("Lifting weights repetition 6");
// console.log("Lifting weights repetition 7");
// console.log("Lifting weights repetition 8");
// console.log("Lifting weights repetition 9");
// console.log("Lifting weights repetition 10");

// for loop keeps running while condition is TRUE
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

// Looping Arrays, Break and Continue
const adoni = [
  "Adoniyas",
  "David",
  2005,
  "Student",
  ["Bereket", "Fiker", "Kiya", "Besuti"],
  true,
];

const types = [];
for (let i = 0; i < adoni.length; i++) {
  // Reading from jonas Array
  console.log(adoni[i], typeof adoni[i]);

  // Filling types array
  // types[i] = typeof adoni[i];
  types.push(typeof adoni[i]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const birthYear = [];
for (let i = 0; i < years.length; i++) {
  birthYear.push(2025 - years[i]);
}

console.log(birthYear);

// continue and break
console.log("------ STRING ONLY -------");
for (let i = 0; i < adoni.length; i++) {
  if (typeof adoni[i] !== "string") continue;
  // WHEN typeof adoni is a number or other types except string
  // Continue statement only stops the current iteration of the loop and goes to the next iteration
  // typeof adoni is not string so continue meaning stop the current iteration and go to the next
  // iteration and when it is string the code becomes false and the loop runs so AS SUMMARY WHEN IT IS TRUE IGNORE AND GO TO THE NEXT BUT IF IT IS FALSE PRINT IT OUT
  console.log(adoni[i], typeof adoni[i]);
}

// log NO other elements after we found a number

for (let i = 0; i < adoni.length; i++) {
  if (typeof adoni[i] === "number") break;
  // when this is true the loop is TERMINATED completely just everything stops working
  console.log(adoni[i], typeof adoni[i]);
}



const adoni = [
  "Adoniyas",
  "David",
  2005,
  "Student",
  ["Bereket", "Fiker", "Kiya", "Besuti"],
  true,
];
console.log(adoni.length);
for (let i = adoni.length - 1; i >= 0; i--) {
  console.log(adoni[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`------- Starting Exercise ${exercise}`);

  for (let rep = 1; rep <= 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repitition ${rep}`);
  }
}


// Alice hourly wage 15 hourly worked 35
// Bob  20  45
// Charlie  18 40
// David 22 50
// Emma 25 38
//
const employers = [
  {
    name: 'Alice',
    hourlyWage: 15,
    hoursWorked: 35,
  },
  {
    name: 'Bob',
    hourlyWage: 20,
    hoursWorked: 45,
  },
  {
    name: 'Charlie',
    hourlyWage: 18,
    hoursWorked: 40,
  },
  {
    name: 'David',
    hourlyWage: 22,
    hoursWorked: 50,
  },
  {
    name: 'Emma',
    hourlyWage: 25,
    hoursWorked: 38,
  },
];

const calcSalary = function (hourlyWage, hoursWorked) {
  if (hoursWorked <= 40) {
    return hourlyWage * hoursWorked;
  } else if (hoursWorked > 40) {
    return hourlyWage * 40 + (hoursWorked - 40) * 1.5 * hourlyWage;
  }
};
console.log(calcSalary(10, 50));

// const weeklySalary = [];
// for (let i = 0; i < employers.length; i++) {
//   weeklySalary.push(
//     calcSalary(employers[i].hourlyWage, employers[i].hoursWorked)
//   );
// }
// console.log(weeklySalary);

const weeklySalarySummary = [];
for (let i = 0; i < employers.length; i++) {
  let salary = calcSalary(employers[i].hourlyWage, employers[i].hoursWorked);
  weeklySalarySummary.push(
    `${employers[i].name} worked ${employers[i].hoursWorked} hours and earned $${salary} this week.`
  );
}
console.log(weeklySalarySummary);

const calcAge = birthYear => 2037 - birthYear;
*/

//////////////////////////////////
// The While loop

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`FOR: Lifting weights repetition ${rep}`);
// }
// let rep = 1;
// while (rep <= 10) {
//   console.log(`While: Lifting weights repetition ${rep}`);
//   rep++;
// }

// let dice = Math.round(Math.random() * 6) + 1;
// console.log(dice);

// while (dice !== 6) {
//   console.log(` You're rolled a ${dice}`);
//   dice = Math.round(Math.random() * 5) + 1;
// }

///////////////////////////////
// Bro code about While loops

// let loggedIn = false;
// let username;
// let password;

// while (!loggedIn) {
//   username = window.prompt('Enter a username');
//   password = window.prompt('Enter a password');

//   if (username === 'Adoni' && password === 'Eda') {
//     loggedIn = true;
//     console.log('You are logged in!');
//   } else {
//     console.log('Invalid Credentials! Please try again!');
//   }
// }

// const timeTravelingRule = function (number) {
//   if (number % 2 == 0) {
//     return taker.push(number * 2);
//   } else {
//     return taker.push(number * 3 + 1);
//   }
// };

// let dice = Math.round(Math.random() * 6) + 1;
// console.log(dice);

// while (dice !== 6) {
//   console.log(` You're rolled a ${dice}`);
//   dice = Math.round(Math.random() * 5) + 1;
// }

// Time-Travelling Number Machine known as Collatz Conjecture FIXME
const func = function (number) {
  const taker = [number];
  while (number !== 1) {
    // if (number % 2 == 0) {
    //   taker.push(number / 2);
    //   number = number / 2;
    // } else {
    //   taker.push(number * 3 + 1);
    //   number = number * 3 + 1;
    // }
    number = number % 2 == 0 ? number / 2 : number * 3 + 1;
    taker.push(number);
  }
  return taker;
};
console.log(func(34));
// console.log(taker);
