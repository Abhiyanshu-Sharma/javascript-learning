// if
// else if
// else if 
// else if
// else

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter temperature in Celcius: ", (temp) => {
    if(temp < 0) {
        console.log("Extremely cold outside");
    } else if(temp < 16) {
        console.log("It is still cold outside");
    } else if(temp < 25) {
        console.log("Wheater is okayish");
    } else if(temp < 35) {
        console.log("Lets go for a swim");
    } else if(temp < 45) {
        console.log("Your cooked man!");
    } else {
        console.log("Grilled fr");
    }
    rl.close();
});