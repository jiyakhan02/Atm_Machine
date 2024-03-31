#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000; // Dollar
let mypin = 1234;

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "enter your pin number",
    type: "number",
  },
]);

if (pinAnswer.pin === mypin) {
  console.log("correct pin code!");

  let operationAns = await inquirer.prompt([
    {
      name: "opration",
      type: "list",
      message: "please select option",
      choices: ["withdraw", "check balance"],
    },
  ]);

  if (operationAns.opration === "withdraw") {
    let withdrawAns = await inquirer.prompt([
      {
        name: "withdrawMethod",
        type: "list",
        message: "select a withdrawal method",
        choices: ["Fast cash", "Enter Amount"],
      },
    ]);
    if (withdrawAns.withdrawMethod === "Fast cash") {
      let fastcashAns = await inquirer.prompt([
        {
          name: "fastcash",
          type: "list",
          message: "Select Amount",
          choices: [1000, 2000, 5000, 10000],
        },
      ]);
      if (fastcashAns.fastcash > myBalance) {
        console.log("Insufficient Balance");
      } else {
        myBalance -= fastcashAns.fastcash;
        console.log(`${fastcashAns.fastcash} withdraw successfully`);
        console.log(`your Remaining Balance is: ${myBalance}`);
      }
    } else if (withdrawAns.withdrawMethod === "Enter Amount") {
      let amountAns = await inquirer.prompt([
        {
          name: "amount",
          message: "enter your amount",
          type: "number",
        },
      ]);
      if (amountAns.amount > myBalance) {
        console.log("Insufficient Balance");
      } else {
        myBalance -= amountAns.amount;
        console.log(`${amountAns.amount} withdraw successfully`);

        console.log(`your remaining balance is:  + ${myBalance}`);
      }
    }
  } else if (operationAns.opration === "check balance") {
    console.log("your balance is:" + myBalance);
  }
} else {
  console.log("Incorrect pin number");
}
