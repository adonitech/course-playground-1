let balance = 0;
const transactionHistory = [];
const deposit = function (money) {
  if (typeof money === "number" && money > 0) {
    balance += money;
    transactionHistory.push({ type: "deposit", amount: money });
    console.log(
      `NOTIFICATION: You just deposited ${money} birr, Available amount is ${balance}`
    );
  } else {
    console.log("NOTIFICATION: Invalid input!!!");
  }
};
const withdraw = function (money) {
  if (balance < money) {
    console.log(`NOTIFICATION: Insufficient funds, Transaction cancelled.`);
  } else if (money <= 0) {
    console.log("NOTIFICATION: Invalid input!!!");
  } else {
    balance -= money;
    console.log(
      `NOTIFICATION: You withdraw ${money} birr, Remaining amount is ${balance}`
    );
    transactionHistory.push({ type: "withdraw", amount: money });
  }
};
const checkBalance = function () {
  console.log(balance);
  return balance;
};
// READ mine transaction message was this
// ${transactionHistory[i].type === "deposit" ? "+" : "-"}${
//   transactionHistory[i].amount
// }
const showTransactions = function () {
  for (let i = 0; i < transactionHistory.length; i++) {
    console.log(
      `Transaction #${i + 1}: ${[transactionHistory[i].type]} ${
        transactionHistory[i].amount
      } `
    );
  }
  console.log(`your remaining balance is ${checkBalance()}`);
};

let totalDeposited = 0;
let totalWithdrew = 0;
const depositSummary = function () {
  for (let i = 0; i < transactionHistory.length; i++) {
    if (transactionHistory[i].type === "withdraw") continue;
    totalDeposited += transactionHistory[i].amount;
  }
  console.log(`the total amount deposited lifetime is ${totalDeposited}`);
};
const withdrewSummary = function () {
  for (let i = 0; i < transactionHistory.length; i++) {
    if (transactionHistory[i].type === "deposit") continue;
    totalWithdrew += transactionHistory[i].amount;
  }
  console.log(`the total amount withdrawn lifetime is ${totalWithdrew}`);
};
deposit(500);
withdraw(400);
deposit(4000);
deposit(-6000);
deposit(500);
withdraw(1000);
withdraw(0);
withdraw(3000000000000);
checkBalance();
showTransactions();
depositSummary();
withdrewSummary();

deposit(0);

const transactionReset = function () {
  // for (let i = 0; i < transactionHistory.length; i++) {
  //   transactionHistory.pop();
  // }
  // READ My solution for the loop
  // let i = transactionHistory.length;
  // while (i = 0) {
  //   transactionHistory.pop();
  //   i--;
  // }

  // READ Chatgpt's suggestion ( BASED on my code)
  // let i = transactionHistory.length;
  // while (i > 0) {
  //   transactionHistory.pop();
  //   i--;
  // }

  // READ REAL solution
  while (transactionHistory.length > 0) {
    transactionHistory.pop();
    i--;
  }
};
transactionReset();
console.log(transactionHistory);
