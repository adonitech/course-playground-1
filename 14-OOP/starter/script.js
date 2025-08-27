'use strict';
// /*
const Person = function (firstname, birthYear) {
  this.fname = firstname;
  this.year = birthYear;
};
const jonas = new Person('Jonas', 1991);
const matilda = new Person('Matilda', 2017);

// 1. new empty object is created
// the this keyword point to the empty object
// 2. function is called, the this keyword set to this newly created object
// 3. the object is linked to prototype
// 4. function automatically returns the Object

Person.hey = function () {
  console.log('hey there');
};
Person.hey();
// jonas.hey(); won't work

console.log(jonas instanceof Person);

// Prototypes
console.log(Person.prototype);
console.log(Array.prototype);
Person.prototype.calcAge = function () {
  console.log(2038 - this.year);
};
jonas.calcAge();
matilda.calcAge();

// This is the prototype of jonas
console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);
// Person.prototype is not a prototype of a person b/c Person is a class not an object but instead Person.prototype will be a prototype for instances of person or objects created from Person class.

// person.prototype is indeed the prototype of jonas
console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person)); // False
// .prototypeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(jonas, matilda);

// Checking if the object has a specified property
console.log(jonas.hasOwnProperty('fname'));
console.log(jonas.hasOwnProperty('species'));

console.log(jonas.__proto__); // Jonas prototype or Person.prototype
console.log(jonas.__proto__.__proto__); // Object.prototype
console.log(jonas.__proto__.__proto__.__proto__); // Object.prototype.prototype

const arr = [1, 2, 3, 4, 4, 4, 4, 2, 3, 4]; // new Array === [] and Array is constructor function
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
// console.dir(Person.prototype.constructor);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1.__proto__);
console.dir(h1.__proto__.__proto__);
console.dir(h1.__proto__.__proto__.__proto__);
// console.clear();

const Car = function (carName, speed) {
  this.carName = carName;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.carName} is going at ${this.speed}km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.carName} is going at ${this.speed}km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);
bmw.accelerate();
bmw.brake();

mercedes.accelerate();
mercedes.brake();
// */
// instatnt
////////////////////////////////////////////////////////////
// ES6 Classes
// class expression
// const PersonCl = class {}

// class declaration
class PersonCl {
  constructor(fulName, birthYear) {
    this.fullName = fulName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that arlread exust
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else console.log('not valid');
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log('hey there');
  }
}
const jessica = new PersonCl('Jessica Adoni', 1996);
console.log(jessica);
jessica.calcAge();
// get age being called on
console.log(jessica.age);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
jessica.greet();

PersonCl.hey();
// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens meaning we can pass them to functions and return them from functions
// 3. Classes are excuted in strict mode even if we didn't activate the strict mode

const account = {
  owner: 'jonas',
  movements: [200, 300, 130, 888],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);
