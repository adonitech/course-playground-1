'use strict';
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

for (const flight of flights.split('+')) {
  for (const fly of flight.split(';')) {
    const all = fly.replace('_', '').replace('_', ' ');
    console.log(all);
  }
}
const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// We can compute property names
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 Enhanced Object Literals
  openingHours,
  // You can get rid of both function keyword and semicolon, IT WILL WORKS JUST FINE
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({
    starterIndex: adonii = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    // this names needs to be the same as the passed object properties VERY IMPORTANT
    console.log(adonii, mainIndex, address, time);
    console.log(
      `Order recieved! ${this.starterMenu[adonii]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time} `
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const allUnderscores = text.split('\n');

  const changer = function ([...underscore]) {
    for (const [i, n] of underscore.entries()) {
      const underscoreKey = n.indexOf('_');
      const capitalized =
        n[underscoreKey + 1].toUpperCase() +
        n.slice(underscoreKey + 2).toLowerCase();
      const row = n.slice(0, underscoreKey).toLowerCase().trim();
      const camelCased = row + capitalized;
      console.log(`${camelCased.padEnd(20, ' ')}${'✅'.repeat(i + 1)}`);
    }
  };
  changer(allUnderscores);
});

///////////////////////////////////////
// Coding Challenge #4


Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀

//////////////////////////////////////
// Working with STRINGS

const airline = 'Ethiopian Airlines Company';
const plane = 'B737';
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);

console.log(airline.length);

console.log(airline.indexOf('r'));
console.log(airline.indexOf(' '));
console.log([...airline].indexOf(' '));
console.log(airline.lastIndexOf(' '));

// READ indexOf is case sensetive READ
console.log(airline.indexOf('iopian'), airline.indexOf('Iopian')); //  these two are two different things

console.log(airline.slice(5)); // the outpus string is called SUBSTRING READ
console.log(airline.slice(5, 11)); // READ this doesn't include the last element like the 11  // Output: pian A  another note is that 11 - 5 = 6; 6 is the length of the substring
console.log(airline);
console.log(airline.slice(0, airline.indexOf(' '))); // First word in the string
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // last word in the string

console.log(airline.slice(-2)); //READ start extracting from the end // Output:- ny
console.log(airline.slice(0, -8)); // Ethiopian Airline b/c company + ' ' = 8

// NOTE:-
// HOW could strings have methods???
// it is because of
console.log(new String('string here'));
// JavaScript automatically puts our string into this string fuction and then call the methods while on this object and then returns back to a PRIMITIVE string   READ REMEMBER that:- all of these methods return a primitive string, Okay?  // Yeah, Teacher!!!
// Demonstration here
console.log(typeof new String('string here')); // Output: objeect
console.log(typeof new String('string here').slice(4)); // Output: string

//////////////////////////
// Just fun function here

function firstLast(text) {
  if (typeof text !== 'string') return 'please put a valid text';

  const firstWord = text.slice(0, text.indexOf(' '));
  const lastWord = text.slice(text.lastIndexOf(' ') + 1);

  return `First word:- ${firstWord} and Last word:- ${lastWord}`;
}
console.log(firstLast("I might love you but, i don't think you love me."));
//////////////////////////////////////////

// console.log(airline);
// console.log(airline.toUpperCase());
// console.log(airline.toLowerCase());

// Fix capitalization in name
const nameCorrector = function (name) {
  const lowerName = name.toLowerCase();
  const correctFirstName =
    lowerName[0].toUpperCase() + lowerName.slice(1, lowerName.indexOf(' '));

  const lastNameLetter = lowerName
    .slice(lowerName.indexOf(' ') + 1, lowerName.indexOf(' ') + 2)
    .toUpperCase();

  const correctLastName =
    lastNameLetter + lowerName.slice(lowerName.indexOf(' ') + 2);

  console.log(correctFirstName, correctLastName);
};

nameCorrector('(jdkAS DAviD');
nameCorrector('jonAS DAviD');
nameCorrector('edeN Yetesha');

// Comparing email
const email = 'hello@adoni.io';
const loginEmail = '   Hello@Adoni.Io \n';

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);
// trimStart() && trimEnd() are also existed.
// TODO :- give a function two emails, one correct and one to be checked and return boolean

// READ replacing and it is CaseSensetive
const priceGB = '100,99 £';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement = 'All things are good, the file must be good!';
// console.log(announcement.replaceAll('good', 'true'));
// READ This kind of something is like RegExp
console.log(announcement.replace(/good/g, 'true'));

// Booleans
const plaane = 'Airbus A320neo';
console.log(plaane.includes('A320'));
console.log(plaane.startsWith('Air'));

if (plaane.startsWith('Airbus') && plaane.endsWith('neo'))
  console.log('Part of the NEW Airbus family');

// Good practice is that always to CONVERT to lowerCase READ
// Practice exercise
function checkBaggage(items) {
  const baggage = items.toLowerCase();

  if (
    baggage.includes('gun') ||
    baggage.includes('rifle') ||
    baggage.includes('cocaine')
  ) {
    console.log('You are NOT allowed to board!');
  } else {
    console.log('Welcome aboard!!!');
  }
}
checkBaggage('I have a gun, cocaine and truemanship');
checkBaggage('I have a sunglass, socks');
checkBaggage('I have a Cocaine and a ball');

//READ Split and Joint(which is the opposite of split)
console.log('a+very+plus+string'.split('+'));
console.log('Adoniiyas David Negash'.split(' '));

const [firstName, lastName] = 'Adoniyas Dawit'.split(' ');
const adoni = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(adoni);

function capitalizer(name) {
  const names = name.split(' ');
  const arr = [];
  for (const n of names) {
    // arr.push(n[0].toUpperCase() + n.slice(1));
    arr.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(arr.join(' '));
}
capitalizer('adoni david negash demise desalegn');
capitalizer('eden yetesha');
capitalizer('eda');

// Padding
const creditCardMasker = function (creditCardNumber) {
  const str = String(creditCardNumber);
  const four = str.slice(-4);
  const something = four.padStart(str.length, '*');
  console.log(something);
};

creditCardMasker(12345678);
creditCardMasker(12348575858);
creditCardMasker('12375384090098797899787978');
// BUG Where does e+25 comes from?????

// Repeat
const message = 'Bad weather... All Depatures Delayed...';
console.log(message.repeat(6).replace(/.B/g, '. B').split('... Bad'));


//////////////////////////////////////
// Maps Iteration
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C++'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again!'],
  ['wrong', 'choose from the choice'],
]);
console.log(question.values());
// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') {
//     console.log(`Choice ${key}: ${value}`);
//   }
// }

// const answer = Number(prompt('Your answer'));
// console.log(answer);

// if (answer === 3) {
//   console.log(question.get(true));
// } else {
//   console.log(
//     ` Wrong answer ${question.get(false)} it's not, ${question.get(
//       answer === 1 || answer === 2 ? answer : 'wrong'
//     )}`
//   );
// }

// Convert map to array
console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);


//////////////////////////////////////
// Maps: Fundamentals
const rest = new Map();
// the best way to create a map to define empty map and then set a value to it like these
rest.set('name', 'Smenesh Shiro');
// FORMULA: key, something that u wanted to be returned
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :)');

//READ This is how to read from a map we just pass the key name and it must be equal with === like type of key value does matter. true(correct) but 'true'(incorrect) because they have d/t types
console.log(rest.get('close'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 15; // Pretty clever use of Maps
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// has method checks if the key name is in the map or not and return a boolean value
console.log(rest.has('open')); // false

// Delete a method
rest.delete(2);
console.log(rest);

// how many are there and returns the size in numbers
console.log(rest.size); // Output: 7

// and we can also clear the Map like erase everything from the Map
// rest.clear();
// console.log(rest); // Output: Map(0) {size: 0}

//BUG started on HOW TO USE OBJECTS AS MAP KEYS
// rest.set([1, 2], 'Test');
// console.log(rest.get([1, 2]));
// This doesn't work. Why??? well, it's because those both two arrays( [1, 2]) are not in the same object. even though we wrote them in the same way, but they are not the same object in the heap, Okay? the key here is this exactly object rest.set([1, 2] <= this one so
// In order to make it work
let arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr));
// BUG ended here

////////////////////////////////////////
// Sets
// Set is a collection of unique values. That means a Set can never have duplicates. READ SETS ALSO ARE ITERABLES
const orderSet = new Set([
  'pasta',
  'Pizza',
  'Pasta',
  'Shiro',
  'Pasta',
  'Pizza',
  'pasta',
]);

console.log(orderSet); // It has a size of 4 and according to Set "pasta" and "Pasta" are 2 different things

// in Set we only put iterables
console.log(new Set('Love you')); // Output 'L', 'o', 'v', 'e','','y','u'
// There is no duplicates here, it just returns the unique value
console.log(...[...'Love']);

console.log(orderSet.size);
console.log(orderSet.has('Pasta'));
console.log(orderSet.has('Bread'));
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread'); // This one is ignored because the set just need unique value but both are the same so the second one is ignored.
orderSet.delete('Pasta');
console.log(orderSet);
// You can't retrieve values from a set. there is no point retrieve data out of a set.
// If you're goal is to store values and then retrieve it then the best use case, is to just use an array.
//READ SETS ARE ITERABLES SO WE CAN LOOP THROUGH THEM
for (const order of orderSet) console.log(order);

const godd = 'Javascript';
for (const omg of godd) console.log(omg);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);
console.log(
  new Set(
    'Javascript is the best programming language that ever exist on Earth'
  ).size
); // Output: 21 There are 21 different letters

// READ JUST FOR FUN
function letterCounter(statement) {
  if (typeof statement !== 'string') {
    return 'Please provide the text in the string';
  }
  let counter = new Set(statement).size;
  if (statement.includes(' ')) {
    counter--;
  }
  return counter;
}
console.log(letterCounter('the quick brown fox jumps over the lazy dog'));
console.log(letterCounter(['adoniyas']));
//READ FUN JUST ENDED

//////////////////////////////////////
// IDK When the fuck i wrote this code
const properties = Object.keys(openingHours);
console.log(properties, openingHours);

let openStr = `We are open on ${properties.length} days:`;
for (const day of properties) {
  properties.indexOf(day) === properties.length - 1
    ? (openStr += ` ${day}.`)
    : (openStr += ` ${day},`);
}
console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
console.log(entries);

for (const x of entries) {
  console.log(x);
}

///////////////////////////////////////
// Coding Challenge #2


Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀


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
// 1.
for (const [no, name] of game.scored.entries()) {
  // console.log(goal);
  console.log(`Goal ${no + 1}: ${name}`);
}

// 2.
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) {
  average += odd;
  average /= odds.length;
}
console.log(average);
// My Solution
function avg({ team1, x, team2 }) {
  return (team1 + x + team2) / 3;
}
console.log(avg(game.odds));

// 3.
console.log(odds);
console.log(`Odd of victory ${game.team1}: ${odds[0]}`);
console.log(`Odd of draw: ${odds[1]}`);
console.log(`Odd of victory ${game.team2}: ${odds[2]}`);

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}
// for (const [t1, draw, t2] of odds) {
//   console.log(t1);
//   // console.log(`Odd of victory`);
// }


///////////////////////////////////////
// Optional Chaining
// // if(undefined.open) throws a TypeError
// if (restaurant.openingHours.mon.open)
// console.log(restaurant.openingHours.mon.open);

// WITH optional chaining
// restaurant.openingHours.mon is undefined so it won't throw a TypeError instead it immedietly return undefined
// READ Formula: nullishValue(undefined || null)?returns undefined or null but if it is falsy or truthy value and then the next will be executed like .open will be executed
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);
// READ (restaurant.openingHours?.mon?.open) when we put ? we're asking if it is exists or not. If restaurant.openingHours doesn't exist then the .mon won't be even read it just be ignored.

// Example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   // console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// Methods
// To check whether the method is exist or not
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

// Arrays
// Check if the array is empty or not
// const users = [{ name: 'Jonas', email: 'hello@gmail.com' }];
// console.log(users[0]?.name ?? 'User array empty');
// if (users.length > 0) console.log(users[0].name);
// else console.log('user array empty');

///////////////////////////////////////
// The for-of loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  // console.log(item);
  console.log(`${i + 1}: ${el}`);
}
// console.log([...menu.entries()]);

///////////////////////////////////////
// Coding Challenge #1
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀

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

const [players1, players2] = game.players;
console.log(players1);
console.log(players2);
const [gk, ...fieldPlayers] = players1;
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
const players1Final = [...players1];
players1Final.push('Thiago');
players1Final.push('Coutinho');
players1Final.push('Perisic');
console.log(players1Final);
const { team1, x: draw, team2 } = game.odds;

function printGoals(...scoredPlayers) {
  // My UNDERSTANDING
  // for (let i = 0; i < scoredPlayers.length; i++) {
  //   console.log(`${scoredPlayers[i]} ${scoredPlayers.length}`);
  // }
  // REAL SOLUTION
  console.log(`${scoredPlayers.length} goals were scored`);
}
printGoals('thiago', 'Mo salah', 'Rashford');
team1 > team2 && console.log('Team 2 is more likely to win');
team1 < team2 && console.log('Team 1 is more likely to win');
*/

/*
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

// Logical OR (||=) assignment operator assigns a value to a variable if that variable is currently falsy
// rest1.numGuests = rest1.numGuests ||  10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// Nullish Assignment Operator (null or undefined) will assign a value to a variable if that exact variable is currently nullish
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// READ AND assignment operator assigns a value if its currently truthy
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';
console.log(rest1);
console.log(rest2);
/////////////////////////////////////////
// Nullish Coalescing Operator (ES 2022)
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
// This is because the Nullish Coalescing Operator works with nullish values instead of falsy values. What does it mean?
// This means that only if we get rid of restaurant.numGuests = 0; and we will get 10 well because restaurant.numGuests doesn't exist so the operator goes to second value or operand
// SUMMARY
//READ READ READ Nullish: null and undefined (NOT 0 or '' like doesn't include falsy values only null and undefined)
//READ Only NOT Nullish values short-circuit this operator
*/
/*
/////////////////////////////////////////
// Short Circuiting (&& and ||)

// Logical Operators (From Left to Right)
// Use ANY data type, return ANY data type, short-circuiting(short-circuit evaluation)

console.log('--------OR--------');
// in || operator the result is true if at least one operand is true
console.log('' || 'jonas');
// READ Short-Circuiting means the second operand skipped if the first operand is true for || or false for && and the remaining conditions are ignored so that's what we call short circuiting evaluation

console.log(undefined || null); // this is not Short-circuiting because undefined is false so the || operator checks second one return that even if the value is a falsy value
restaurant.numGuests = 100000;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1, typeof restaurant.numGuests);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);
 
console.log('-------- AND --------');
// The && operator short circuits when the first value is falsy and immediately returns that value ignoring other values or when it founds a falsy value before the last value, Otherwise we don't call it Short-circuiting evaluation
//READ  THE && operator is true if all values are true

console.log(0 && 'Jonas');
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}
const test =
  restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'Spinach');

// SUMMARY
// We can use the || operator to set default values
// We can use the && operator to excute code in second operand if the first one is true like test variable


/////////////////////////////////////////
// REST Pattern and Parameters (...)

// 1) Destructuring
// Spread operator is for to build new arrays and to pass multiple values into a function
// READ Spread operator is to unpack an array(lemezerzer new yemntekembet) while,

// Spread, because on Right Hand Side of the =
const arra = [1, 2, ...[3, 4]];
console.log(arra);

// READ Rest is to pack elements into an array (to collect multiple elements into an array(maletm yetebetatenutn and lay wede array adrgo yisebesbachewal))

// RESt, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5, 6];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
// REST pattern always must be the last in destructuring assignment(READ) && there can only ever be one rest pattern in any destructuring assignment

console.log(pizza, risotto, otherFood);

// Objects REMEMBER: the order in the objects do not matter
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat);
// console.log(weekdays);

// 2) Functions
// REST Parameters
const add = function (...numbers) {
  let sum = 0;
  console.log(numbers);
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(3, 4, 2, 1, 6, 3);

const x = [23, 4, 6, 8];
add(...x); // spread operator
restaurant.orderPizza('Mushrooms', 'olives', 'spinach', 'onion'); 
// Output:- 
// 'Mushrooms' 
// [
    "olives",
    "spinach",
    "onion"
]
restaurant.orderPizza('Just one');


/////////////////////////////////////////
// Spread Operator (...)

const arr = [3, 4, 5, 6, 7, 8, 9];
const goodNewArr = [1, 2];
for (let i = 0; i < arr.length; i++) {
  goodNewArr.push(arr[i]);
}
console.log(goodNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Shiro']; // we are writing new array not manipulating the array
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// Join 2 or more arrays together
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Spread operator works on iterables
// READ Iterables: arrays, strings, maps, sets but NOT Objects
const str = 'Jonas';
const letters = [...str, '', 'S.']; // 'J', 'o', 'n', 'a', 's', '', 'S.'
// READ We can only use spread operator when buildng an array or when we pass values into a function
console.log(letters);
console.log(...str);

// we can't use it to build string using a template literal
// READ
// READ
// READconsole.log(`${...str} Schmedtmann`); // This Would not work because this is not a place multiple values separated by a commas and they are only expected only when we build a new array or when we pass arguments into a function

// REAl world Example
// restaurant.orderPasta('WHere', 'Why', 'How');
// const ingredients = [
//   prompt('Write your ingredient 1'),
//   prompt('Write your ingredient 2'),
//   prompt('Write your ingredient 3'),
// ];
// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

// 2018 ES6+ the spread operator also works on OBJECTS even objects are not iterables

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guisppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Dagm TEJ';
console.log(restaurantCopy.name);
console.log(restaurant.name);


///////////////////////////////////////////////
// Destructuring Objects
// We really passed one argument here Only ONE and then we destructure it right away in the function
console.log(restaurant);
// We're calling the function with ONE object(only one argument) and we destructure that object inside the function. orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) 
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});
restaurant.orderDelivery({
  address: 'Via del Seol',
  starterIndex: 1, // here we don't specify the time and the mainIndex so the default one will be used.
});

////////////////////////////////////////////
// Destructuring Objects
//READ we need to specify the property names that we want to retrieve from the object || the variable(that we declare for the array destructuring) name must be the same as the property name so that it can know which properties i want to retreive // REMEMBER: for objects the order don't matter
const { name, openingHours: openingHour, categories } = restaurant;
console.log(name, openingHour, categories);

// So what if we don't want the same variable name as the property one, THERE is a SOlUTION for that
// READ Formula is = const {propertyname: newVariableName} = objectName(that we want); READ
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);
// Default value formula
//READ Remember empty array is not undefined
if ([]) console.log('I love that');
// const {propertyName: variableName = defaultValue}or maybe if someone tries to access the property that is not there and you guess it like the menu
// default value formula would be guessedValue = defaultValue
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// READ Mutating Objects like we do in array Eg.   [secondary, main] = [main, secondary]; but it works differently for objects
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

// now we want a to become 23 and b to become 7
// {a,b} = obj; FIXME this would throw an error because when we start with curly brace, Javascript expects a code block since we cannot assign a code block like we did with the equal sign then we get an error TO SOLVE THIS we wrap up it in parenthesis
({ a, b } = obj);
console.log(a, b);

// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours; // openingHours was defined as const that's why its working
console.log(o, c);
console.log(openingHours);


////////////////////////////////////////////
// Destructuring Arrays
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);

const [x, y, z] = arr;
console.log(x, y, z);
console.log(x);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
// let temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[secondary, main] = [main, secondary];
console.log(main, secondary);

// Recieve 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// READ this is how nested destructuring works
// Basically we need to destructuring inside destructuring
const nested = [2, 3, [5, 6]];
const [number1, , number3] = nested;
const [number23, number34] = nested[2];
console.log(number1, number3);
console.log(number23, number34);

const [i, , [j, k]] = nested;
console.log(i, j, k);

// READ Default values like when we don't know the length of the array
// const [p, q, r, s] = [6, 9];
// console.log(p, q, r, s);
// now r and s is undefined and that might actually throw an error so what we do we give them default values like 1, let's do that...
const [p = 1, q = 1, r = 1, s = 1] = [6, 9];
// now they won't throw undefined anymore

console.log(p, q, r, s);
*/

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log([...menu.entries()]);
// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   // console.log(item);
//   console.log(`${i + 1}: ${el}`);
// }
// // console.log([...menu.entries()]);

// for (const [i, item] of menu.entries()) {
//   console.log(`${i + 1}: ${item}`);
// }
