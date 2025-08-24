'use strict';
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex, dessertIndex) {
    return [
      this.starterMenu[starterIndex],
      this.mainMenu[mainIndex],
      this.starterMenu[dessertIndex],
    ];
  },
  orderDelivery: function ({ starterIndex = [], time, address, mainIndex }) {
    console.log(
      `Order recieved ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};
console.log(restaurant);
/*

///////////////////////////////////////
// Coding Challenge #1
// We're building a football betting app (soccer for my American friends 😅)!

// Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

// 1. Create one player array for each team (variables 'players1' and 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

// TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

// GOOD LUCK 😀

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
const {
  players: [players1, players2],
} = game;
const [gk, ...fieldPlayers] = players1;
console.log(gk);
console.log(fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

const {
  odds: { team1, x: draw, team2 },
} = game;

const printGoals = function (...playerNames) {
  console.log(playerNames.length);
};

printGoals('thiago', 'Mo salah', 'Rashford');
printGoals(...game.scored);

team1 > team2 && console.log('Team 2 is more likely to win');
team1 < team2 && console.log('Team 1 is more likely to win');

/////////////////////////////////////////
const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};
const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// rest1.numGuests ||= 10; // if the value is falsy then it will assign 10
// rest1.numGuests &&= 9; // if the value is truthy then it will assign 9
rest1.numGuests ??= 5;
console.log(rest1);


////////////////////////////////////////
// Nullish Coalescing Operator (ES 2022)
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests); // Output is 10

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

//READ READ READ Nullish: null and undefined (NOT 0 or '' like doesn't include falsy values only null and undefined)
//READ Only NOT Nullish values short-circuit this operator

/////////////////////////////////////////
// Short Circuiting (&& and ||)
// READ Short-Circuiting means the second operand skipped if the first operand is true for || or false for && and the remaining conditions are ignored so that's what we call short circuiting evaluation

console.log('0' || undefined); // short-circuiting
console.log(0 || undefined); // not short-circuiting

console.log('0' && undefined); // not short-circuiting
console.log(0 && undefined); // short-circuiting

// and we use them to assign values based on a condition
// so

const guest = restaurant.numGuests ? restaurant.numGuests : 10; // we mean here that if numGuests exist in restaurant then guest is equal to restaurant.numGuests otherwise it is equal to 10;
// but we can do it in simpler way
const guest1 = restaurant.numGuests || 10;


////////////////////////////////////////////
// REST Pattern and Parameters
restaurant.orderPizza = function (mainIngredient, ...subIngredient) {
  console.log(mainIngredient);
  console.log(subIngredient);
};
restaurant.orderPizza('Mushrooms', 'olives', 'spinach', 'onion');
restaurant.orderPizza('Mushrooms', 'olivesj', 'jacob');
const [a, b, ...others] = [1, 2, 3, 4, 5, 6];
console.log(a, b, others);

const [pizza, risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, otherFood);

const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

const numberAdder = (...numbers) => {
  let sum = 0;
  console.log(numbers);
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
console.log(restaurant);
const x = [3, 4, 3, 455, 43, 53, 5, 2];
numberAdder(...x);
numberAdder(2, 3, 4, 5, 3, 4, 5, 6, 8, 3, 3, 5);
console.log(restaurant);


////////////////////////////////////////////
// The Spread Operator

const arr = [5, 6, 7, 8, 9];
const newArr = [1, 2, 3, 4, 5];
const newArray = [...newArr];

for (let i = 0; i < arr.length; i++) {
  newArr.push(arr[i]);
}
console.log(newArr);

const newArrWithSpread = [...newArray, ...arr];
console.log(newArrWithSpread);

const firstName = 'Adoniyas';
const lastName = 'David';

// console.log(`${...firstName} ${lastName}`);
// READconsole.log(`${...str} Schmedtmann`); // This Would not work because this is not a place multiple values separated by a commas and they are only expected only when we build a new array or when we pass arguments into a function

restaurant.orderPasta = function (ing1, ing2, ing3) {
  console.log(ing1, 0, ing3, ing2);
};
const numbers = [1, 2, 3];
restaurant.orderPasta(...numbers);

const newRestaurant = { ...restaurant, founder: 'Adoni', country: 'Ethiopia' };
console.log(newRestaurant);

/// DEEpseek things here
// spread dougma
const nested = [{ a: 1 }, { b: 2 }];
const copy = [...nested];
console.log(copy);
copy[0].a = 99;
console.log(nested[0].a); // 99 😱 (original modified)
const x = [1, 2];
const y = [3, 4];
const xy = [...x, ...y, 5];
console.log(xy);

console.log([...'hello'].reverse());

const adder = (a, b, c, d) => {
  console.log(d, a);
  return a + b + c + d;
};
const someNums = [1, 2, 3];
console.log(adder(...[1, 2, 3]));

////////////////////////////////////////////
// Destructuring Objects
restaurant.orderDelivery({
  time: '22:30',
  address: 'Addis Ababa',
  mainIndex: 2,
  // starterIndex: 2,
});
const { name: restaurantName, openingHours, categories } = restaurant;
console.log(restaurantName, openingHours, categories);
console.log([]);
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
// {a,b} = obj;  This won't work b/c JavaScript expects a code block since we can't assisgn like we did with the equal
({ a, b } = obj);

// Nested Object
const {
  openingHours: {
    fri: { open: o, close: c },
  },
} = restaurant;
console.log(o, c);
const {
  thu: { open, close: thu },
  fri,
  sat,
} = openingHours;
console.log(open, thu, fri, sat);
////////////////////////////////////////////
// Destructuring Arrays

restaurant.order(2, 2);
const arr = [2, 3, 4];
const [x, y, z] = arr;
console.log(x, y, z);

// instead of switching variables like this use array destructuring
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);
// let temp = main;
// console.log(temp, main, secondary);
// main = secondary;
// console.log(main, secondary);
// secondary = temp;
// console.log(main, secondary);

[secondary, main] = [main, secondary];
console.log(main, secondary);
// READ recieve 3 return values from a function
const [start, mainCourse, dessertFood, dw = 1] = restaurant.order(2, 0, 0);
console.log(start, mainCourse, dessertFood, dw);

// nested destructuring
const nested = [1, 2, [3, 4]];
const [number1, number2, arrayNumber] = nested;
console.log(number1, number2, arrayNumber);
const [number3, number4] = arrayNumber;
console.log(number3, number4);

const [i, , [j, k]] = nested;
console.log(i, j, k);

// READ Default values

const [p, q, r = 1, s = 1] = [6, 9, 3];
console.log(p, q, r, s);
*/
const adder = objj => {
  let sum = 0;
  for (let i = 0; i < objj.length; i++) {
    sum += objj[i];
  }

  return sum;
};
const numIdentifier = arr => {
  const list = [];

  let num = arr;
  for (let i = arr; i >= 1; i--) {
    list.push(num);
    num--;
  }
  return adder(list);
};
const jan50 = numIdentifier(50);
console.log(jan50);
console.log(numIdentifier(50));
console.log(numIdentifier(84));
console.log(numIdentifier(8));
