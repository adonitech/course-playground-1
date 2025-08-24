"use strict";
// console.log(Boolean());

// Challenge 1
// const massJohn = 92;
// const heightJohn = 195;
// const massMark = 78;
// const heightMark = 169;

// function BMICalculator(mass, height) {
//   height /= 100;
//   return Math.round(mass / height ** 2);
// }

// const markBMI = BMICalculator(massMark, heightMark);
// const johnBMI = BMICalculator(massJohn, heightJohn);
// console.log(markBMI);
// console.log(johnBMI);
// const markHigherBMI = markBMI < johnBMI;
// console.log(markHigherBMI);

// Challenge 2

// if (markBMI > johnBMI) {
//   console.log(`Mark's BMI(${markBMI}) is higher than John's(${johnBMI})`);
// } else {
//   console.log(`Mark's BMI(${markBMI}) is higher than John's(${johnBMI})`);
// }

// Challenge 3 TODO BUG
// It becomes to complicated and i will comeback soon and fix the problems ok? and the problem is i just want to give the scores and want the result and i can give multiple scores with pair(so that's how it will identify the scores like it won't make it) and got the string who wins it
const avgCalculator = function (firstScore, secondScore, thirdScore) {
  const calc = (firstScore + secondScore + thirdScore) / 3;
  if (firstScore > 100 || secondScore > 100 || thirdScore > 100) {
    return [calc];
  } else {
    return [calc, true];
  }
};

const avgDolphinScore = function (a, b, c) {
  return avgCalculator(a, b, c);
};
const avgKoalasScore = function (a, b, c) {
  return avgCalculator(a, b, c);
};
// avgCalculator(97, 112, 101)
const avgDolphinsScore = avgDolphinScore(97, 91, 99);
const avgkoalasScore = avgKoalasScore(106, 95, 100);
console.log(avgDolphinsScore[0], avgkoalasScore);

const checker = function (dolphinScore, koalasScore) {
  if (dolphinScore[0] > koalasScore[0] && !dolphinScore[1]) {
    console.log(`Dolphin wins by ${dolphinScore[0]} vs ${koalasScore[0]}`);
  } else if (koalasScore[0] > dolphinScore[0] && !koalasScore[1]) {
    console.log(`Koalas wins by ${koalasScore[0]} vs ${dolphinScore[0]}`);
  } else {
    console.log("No one wins the trophy");
  }
};

/*

if (avgDolphinsScore[0] > avgkoalasScore[0] && !avgDolphinsScore[1]) {
  console.log(`Dolphin wins by ${avgDolphinsScore[0]} vs ${avgkoalasScore[0]}`);
} else if (avgkoalasScore[0] > avgDolphinsScore[0] && !avgkoalasScore[1]) {
  console.log(`Koalas wins by ${avgkoalasScore[0]} vs ${avgDolphinsScore[0]}`);
} else {
  console.log("No one wins the trophy");
}

// const avgDolphinsScore = avgCalculator(97, 112, 101);
// console.log(
//   avgDolphinsScore,
//   !avgDolphinsScore[1],
//   avgkoalasScore,
//   !avgkoalasScore[1]
// );

// if (avgDolphinsScore[0] > avgkoalasScore[0] && !avgDolphinsScore[1]) {
//   console.log(`Dolphin wins by ${avgDolphinsScore[0]} vs ${avgkoalasScore[0]}`);
// } else if (avgkoalasScore[0] > avgDolphinsScore[0] && !avgkoalasScore[1]) {
//   console.log(`Koalas wins by ${avgkoalasScore[0]} vs ${avgDolphinsScore[0]}`);
// } else {
//   console.log("No one wins the trophy");}*/

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430*/
// const tipCalculator = function (bill) {
//   if (bill >= 50 && bill <= 300) {
//     const calc = bill * 0.2;
//     const calcArray = [calc, bill + calc];
//     const outputString = `The bill was ${bill}, the tip was ${calcArray[0]}, and the total value is ${calcArray[1]}`;
//     return outputString;
//   } else {
//     const calc = bill * 0.2;
//     const calcArray = [calc, bill + calc];
//     const outputString = `The bill was ${bill}, the tip was ${calcArray[0]}, and the total value is ${calcArray[1]}`;
//     return outputString;
//   }
// };
// console.log(tipCalculator(600));
// console.log(tipCalculator(275));
// console.log(tipCalculator(40));

// This is Chatgpt's solution but mine is the above one;

const tipCalculatorr = (bill) => {
  const tipRate = bill <= 300 && bill >= 50 ? 0.15 : 0.2;
  const tip = bill * tipRate;
  const total = bill + tip;
  return `The bill was ${bill}, the tip was ${tip}, and the total value is ${total}`;
};

console.log(tipCalculatorr(600));
console.log(tipCalculatorr(275));
console.log(tipCalculatorr(40));
