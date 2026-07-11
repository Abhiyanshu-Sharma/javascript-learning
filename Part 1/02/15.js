// ternary opertor

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter age: ", (age) => {
    let drink = age >= 5 ? "Coffee" : "Milk";

    console.log(drink)
    rl.close();
});

