///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/
///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

///////////////////////////////////////
// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

// const birthYears = [];
// const years = [1991, 2007, 1969, 2020];
// const ageCalculator = (birthYear) => 2025 - birthYear;

// for (let i = 0; i < years.length; i++) {
//   birthYears.push(ageCalculator(years[i]));
// }
// console.log(birthYears);

// Debugging Challenge from DeepSeek READ

// function calculateAge(birthYear) {
//   const currentYear = 2023;
//   return currentYear - birthYear;
// }
// const age = calculateAge("1995");
// console.log(`You are ${age} years old.`);
// // Output: "You are NaN years old."

// Challenge 1: The Real NaN Mystery READ
/*
// function calculateTotal(birthYear, currentYear) {
//   if (typeof birthYear !== "number" || typeof currentYear !== "number") {
//     return `You entered '${
//       typeof birthYear !== "number" ? birthYear : currentYear
//     }' (string). The numeric sum is ${Number(birthYear) + Number(currentYear)}`;
//   }
//   return currentYear + birthYear;
// }
// const total = calculateTotal("1995", 2023);
// console.log(`Total: ${total}`);

function calculateTotal(birthYear, currentYear) {
  // const numBirth = Number(birthYear);
  // const numCurrent = Number(currentYear);

  // Track invalid inputs
  const invalidInputs = [];
  if (typeof birthYear !== "number")
    invalidInputs.push(`'${birthYear}' (${typeof birthYear})`);
  if (typeof currentYear !== "number")
    invalidInputs.push(`'${currentYear}' (${typeof currentYear})`);

  if (invalidInputs.length > 0) {
    return `Invalid inputs: ${invalidInputs.join(" and ")}.`;
  }

  return birthYear + currentYear;
}
console.log(isNaN("1995"));

const total = calculateTotal("1995", 2023);
console.log(total); // 4018 (number)

const invalidTotal = calculateTotal("abc", "2023");
console.log(invalidTotal); // "Invalid inputs: 'abc' (string) and '2023' (string)."
*/

// READ Challenge 2: Loop Catastrophe
/*
const scores = [85, 92, 78, 95, 88];
for (let i = 0; i < scores.length; i++) {
  console.log(`Score ${i}: ${scores[i]}`);
}
*/

// READ Challenge 3: Object Mayhem
/*
const user = {
  name: "Alex",
  age: 28,
  hobbies: ["coding", "gaming"],
  greet: function () {
    console.log(`Hello, I'm ${this.name}!`);
  },
  listHobbies: function () {
    console.log(`My hobbies are ${this.hobbies.join(" , ")} `);
  },
  listOfHobbies: function () {
    const nestedArrow = () => {
      console.log(`My hobbies are ${this.hobbies.join(" ,,, ")}`);
    };
    nestedArrow();
  },
};
user.greet();
user.hobbies.push("riding bike");
user.listHobbies();
user.listOfHobbies();
*/

// READ Micro-Project Projects
// Project 1: The "Strict Mode" Calculator
/* 
const history = [];
function add(a, b) {
  const aNum = Number(a);
  const bNum = Number(b);

  if (typeof a !== "number" && typeof a !== "string") return "Invalid!";
  if (typeof b !== "number" && typeof b !== "string") return "Invalid!";
  // if (isNaN(aNum) || isNaN(bNum)) return "Invalid!";
  history.push(`${aNum + bNum}`);
  return aNum + bNum;
}
console.log(add("5", 3));
console.log(add("5ad", 3));
console.log(history);
*/

// READ Challenge: The Cashier’s Change Calculator
// Problem Statement:
// You’re helping a cashier give change to customers. Your job is to break down a given amount of change into the fewest coins possible (using pennies, nickels, dimes, and quarters). The loop should keep subtracting coins until the remaining change is $0.00.
console.log("t");
console.log(10 / 25 - (10 % 25) / 25);
console.log(13 / 3 - (13 % 3) / 3);
function calculateChange(dollars) {
  let cents = Math.round(dollars * 100); // Convert to cents
  let quarters = 0,
    dimes = 0,
    nickels = 0,
    pennies = 0;

  if (cents === 0) return "No change needed!";
  if (cents < 0) return "Invalid amount!";

  // Your while loop here...
  while (cents > 0) {
    if (cents / 25 - (cents % 25) / 25) {
      cents -= 25;
      quarters++;
    } else if (cents >= 10) {
      dimes = Math.floor(cents / 10);
      cents -= dimes * 10;
    } else if (cents >= 5) {
      cents -= 5;
      nickels++;
    } else if (cents >= 1) {
      cents -= 1;
      pennies++;
    }
  }

  return `Quarters: ${quarters}, Dimes: ${dimes}, Nickels: ${nickels}, Pennies: ${pennies}`;
}
console.log(calculateChange(19.74));
console.log(calculateChange(0.85));
