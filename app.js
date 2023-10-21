#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let loop = true;
while (loop) {
    const answer = await inquirer.prompt([{
            type: "input",
            name: "Todo",
            message: "Enter your Todo List"
        },
        {
            type: "confirm",
            name: "AddMore",
            message: "Do you want to add more Todo?",
            default: false
        }
    ]);
    const { AddMore, Todo } = answer;
    console.log(answer);
    loop = AddMore;
    if (Todo) {
        todos.push(Todo);
    }
    else {
        console.log("Kindly add valid input");
    }
}
console.log(todos);
