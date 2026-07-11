// if else condition with user input

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your age: ", (user_age) => {

    if (Number(user_age) >= 18) {
        console.log("User can play Resident Evil Requiem");
    } else {
        console.log("User can play mario");
    }

    rl.question("Is your no. even or odd: ", (n) => {
        if (n % 2 === 0) {
            console.log(`${n} is EVEN`);
        } else {
            console.log(`${n} is ODD`);
        }

        rl.close();
    });

});