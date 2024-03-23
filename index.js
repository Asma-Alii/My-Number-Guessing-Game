#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log(chalk.hex("#F15BB5")("Welcome to Number Guessing Game!"));
const answer = await inquirer.prompt([
    {
        name: "guessingNumber",
        type: "number",
        message: chalk.hex("#FDFFB6")("Please Select a Guess Number between 1-6 = "),
    },
]);
if (answer.guessingNumber === randomNumber) {
    console.log(chalk.hex("#57CC99")("Congratulation! You Guess a Right Number"), chalk.hex("#57CC99")("(You Win)"));
}
else {
    console.log(chalk.hex("#EF233C")("You Guess a Wrong number Please Try Again"));
}
