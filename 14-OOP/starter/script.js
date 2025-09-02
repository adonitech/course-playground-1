'use strict';
/*
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
// 
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

  // Methods will be added to .prototype property (Instances methods)
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that arlready exist
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


const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

steven.name = 'Steven';
steven.birthYear = 2002;
console.log(steven);
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const adoni = Object.create(PersonProto);
adoni.init('Adoni', 2005);
adoni.calcAge();

/////////////////////
// Challenge #2
class CarCl {
  constructor(carName, speed) {
    this.carName = carName;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.carName} is going at ${this.speed}km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.carName} is going at ${this.speed}km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}
const ford = new CarCl('ford', 120);
console.log(ford);
console.log(ford.speedUS);
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);

//////////////////////////////////////////////
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  // Person(firstName, birthYear) : this is simply a regular function call and the this keyword is set to undefined so that's why we get an error
  // but this solves the problem
  Person.call(this, firstName, birthYear);
  this.course = course;
};
// Student.prototype = Person.prototype;
// Linking prototypes
Student.prototype = Object.create(Person.prototype);
// Object.create will return empty object so we need this before adding any methods for student
Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
console.log(mike.course);
mike.calcAge();
console.log(mike);

console.dir(Student.prototype.constructor); // Person and this is because we link the prototypes but it is actually Student who construct this so we can do this
Student.prototype.constructor = Student; // then
console.dir(Student.prototype.constructor); // Now its Student
// mike prototype chain can access this
console.log(mike instanceof Object);
console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.clear();
////////////////////////
// Challenge #3
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

const EV = function (carName, speed, charge) {
  Car.call(this, carName, speed);
  this.charge = charge;
};
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.carName} is going at ${this.speed}km/h, with a charge of ${this.charge}%`
  );
};

const tesla = new EV('Tesla', 120, 23);
console.log(tesla);
tesla.accelerate();
tesla.accelerate();
tesla.brake();
tesla.accelerate();
tesla.chargeBattery(100);

//////////////////////////////////////////
class PersonCl {
  constructor(fulName, birthYear) {
    this.fullName = fulName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property (Instances methods)
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that arlready exist
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

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName}`);
  }
  calcAge() {
    console.log(`I'm ${2037 - this.birthYear} years old`);
  }
}

// const martha = new StudentCl('Martha jones', 2011);
const martha = new StudentCl('Martha jones', 2011, 'Computer Science');
console.log(martha);
martha.introduce();
martha.calcAge();

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
steven.init('Steven', 1990);
steven.calcAge();
console.log(steven);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jayStudent = Object.create(StudentProto);
jayStudent.init('Jay', 1999, 'Medical Science');
console.log(jayStudent);
// console.log(jayStudent instanceof StudentProto.__proto__);
// console.log(steven instanceof PersonProto);

console.log(Object.getPrototypeOf(jayStudent) === StudentProto); // true
console.log(jayStudent.__proto__ === StudentProto); // true
*/

class Account {
  // 1) Public fields (instances) not in prototype
  locale = navigator.language;

  // 2) Private fields
  #movements = [];
  #pin;

  // fields can't define in constructor READ READ READ
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // Protected property
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3) Public methods
  // Public interface
  // This methods will be added to Prototype
  getMovements() {
    return this.#movements;
  }
  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved');
    }
    return this;
  }

  // 4) Private methods
  // #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Adoni', 'ETB', 2719);

// acc1.movements.push(250);
// acc1.movements.push(-140);
// acc1._approveLoan(1000);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);

// console.log(acc1.#movements);
// console.log(acc1.pin);
// console.log(acc1.#approveLoan(100));

// Chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(20000);
console.log(acc1.getMovements());
