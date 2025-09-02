const loName = document.querySelector('.loName');
const loPin = document.querySelector('.loPin');
const loBtn = document.querySelector('.loginBtn');

const accountContainer = document.querySelector('.container');
const currentAccName = document.querySelector('#accName');
const balanceText = document.querySelector('.balance');
const requestBtn = document.querySelector('.row-request');
const gate = document.querySelector('.entry');

/// New Account
const newNameinput = document.querySelector('.newName');
const newPininput = document.querySelector('.newPin');
const createBtn = document.querySelector('.create');

let currentAccount;

// Login Implementation
class Account {
  constructor(name, pin) {
    this.name = name;
    this.pin = pin;
  }
}

createBtn.addEventListener('click', function () {
  const newName = document.querySelector('.newName').value;
  const newPin = document.querySelector('.newPin').value;
  currentAccount = new Account(newName, Number(newPin));
});
// button.addEventListener('click', function (e) {
//   const accName = nameInput.value;

//   const where = document.createElement('li');
//   where.textContent = `adoni ${accName}`;
//   console.log(where);
//   accountContainer.append(where);
// });
