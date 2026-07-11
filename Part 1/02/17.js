// nested if else

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let winningNumber = 67;

rl.question("Guess a number: ", (n) => {
    if (Number(n) === winningNumber) {
        console.log("Your guess is right!");
    } else {
        if(Number(n) < winningNumber) {
            console.log("Guess is too low!");
        } else {
            console.log("Guess is too high!");
        }
    }
    rl.close();
});
