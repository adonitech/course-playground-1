'use strict';
// const myName = 'Jonas';
// function first() {
//   const age = 30;

//   if (age >= 30) {
//     const decade = 3;
//     var millenial = true;
//     // console.log(`${decade} is a ${millenial}-old `);
//   }

//   function second() {
//     const job = 'teacher';
//     console.log(`${myName} is a ${age}-old ${job}`);
//   }
//   console.log('i love Eda');
//   second();
// }
// first();
// // second(); Didn't work because of scope chain
// // console.log(millenial);

// function calcAge(birthYear) {
//   // birthYear += 6;
//   const age = 2025 - birthYear;
//   function printAge() {
//     let output = `You are ${age}, born ${firstName} in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       //  Creating NEW variable with same name as outer scope's variable
//       const firstName = 'Jack';

//       // Reassigning outer scope's variable
//       output = 'New Output';
//       const str = `Oh youre millenial ${firstName}`;
//       console.log(str);
//       // console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     console.log(millenial);
//     // console.log(add(3, 3)); won't work in strict mode but if you turn off the strict mode it works perfectly,
//   }
//   printAge();
//   return age;
// }
// const firstName = 'Adoni';
// calcAge(1995);

// Hoisting with variables
// console.log(me);
// // console.log(eda);
// // console.log(adoni);

// var me = 'Adoni';
// let eda = 'myLove';
// const adoni = `Eda's love`;

// // Hoisting with Functions
// console.log(addDecl(2, 3));
// // console.log(addExpr(2, 7));

// // console.log(addArrow(2, 6));
// // The reason why it is not working is because of when var is hoisted its initial value is set to undefined so that means we are trying to call undefined(2.6) and then we get a message saying Uncaught TypeError: addArrow is not a function it is because undefined is not a function

// function addDecl(a, b) {
//   return a + b;
// }
// const addExpr = function (a, b) {
//   return a + b;
// };
// var addArrow = (a, b) => a + b;

// // Example
// if (!numProducts) {
//   deleteShoppingCart();
// } else {
//   console.log('Adonii');
// }
// // console.log(!!numProducts === false);
// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }
/////////////////////////////////////////////
// The this keyword in practice part here
/*
console.log(this);

const calcAge = function (birthYear) {
  console.log(2025 - birthYear);
  console.log(this);
  // Undefined
};
calcAge(1998);
const calcAgeArr = birthYear => {
  console.log(2025 - birthYear);
  console.log(this);
  // Window object. Why window object??? READ
  // it is because the arrow function don't get its own this keyword it just simply inherit from the outer function (in this situation the window) the LEXICAL THIS KEYWORD (it's parent function or parent scope)
};
calcAgeArr(1998);

const adoni = {
  year: 1998,
  calcAge: function () {
    console.log(this);
    // this will point to the jonas object
    // but the this keyword will not simply point to the object where it is written
    console.log(2025 - this.year);
    // you might think the this wrote in adoni object now it will simply point to adoni object always NO NOOO you're wrong here lemme FIXME
  },
};
// In this situation the this keyword will point to adoni because that's who is calling the method.
adoni.calcAge();
// READ the this keyword will point to the object that is calling the method, right? i'm saying calling not who define it or wrote it, okay. let me show you something

const matilda = {
  year: 2017,
};
//READ This is called method borrowing
matilda.calcAge = adoni.calcAge;
matilda.calcAge();
// in this point the this keyword is actually point to matilda, yeah exactly you here me correctly because that's the one who is calling the method

const f = adoni.calcAge;
console.log(f());


// Regular Functions vs. Arrow Functions

const adoni = {
  firstName: 'Adoni',
  year: 1998,
  calcAge: function () {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
    console.log(2037 - this.year);
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
  // inside of this function the this keyword is point to window because the Arrow function doesn't have its own this keyword so it will simply look up to scope chain or lexical this keyword so when its lookup it gets the window object and when it checks for window.firstName it won't get anything so it returns undefined, again if we don't find the something in object it returns or shows undefined, right? it won't throw an error, ok. IT IS REALLY IMPORTANT TO REMEMBER THIS BEHAVIOUR
};
adoni.calcAge();
// Variables declared with var actually create a property in a global object
var firstName = 'Matilda';
adoni.greet();
// so now when adoni.greet() executed it will look up window.firstName so it gets the MATILDA
// key takeaway from here is that we don't have to create variables with var, Ok? Okkkk!!!
// NEVER EVER USE ARROW FUNCTIONS AS METHOD READ

const adonii = {
  year: 1998,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
    // Solution 1
    // the problem here was the regular function gets its own this keyword
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };
    // isMillenial();
    //////////////////////////////////
    // Solution 2
    // just to use arrow function
    const self = this;
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
};
adonii.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 6, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 3, 4, 5);
*/
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Adoni',
  age: 30,
};

const friend = me;
friend.age = 27;
console.log(`Friend`, friend);
console.log(`me`, me);

// friend = {};
// We can't change the value to a new memory address.
// since it's in constant and we cannot change the value in callstack but if we do it, it will simply throw an error,rrrrrrrrrr

const jessica = {
  firstName: 'Jessica',
  lastName: 'David',
  age: 27,
  family: ['Rediet', 'Bob'], // this family is an object because arrays are objects and it's called deeply nested object and it's impossible to manipulate this kind objects in Object.assign it wouldnot work for deeply nested language
};
// const jessi = jessica;
// jessi.lastName = 'Tekeyrual'; this affects both objects jessica and jessi
const jessica2 = Object.assign({}, jessica);
// by the way you can't put jessica first and the empty array second it would not work
jessica2.lastName = 'Williams';

console.log(jessica, 'Jessica');
console.log(jessica2, 'Jessica Copied');
jessica2.family.push('Mom');
jessica2.family.push('Dad');
console.log(jessica, 'Jessica');
console.log(jessica2, 'Jessica Copied');
