// Array destucturing

const myArray = ["value1", "value2", "value3" , "value4", "value5"];

// let var1 = myArray[0];
// let var2 = myArray[1];

// console.log(`var 1 = ${var1}`);
// console.log(`var 2 = ${var2}`);

// short cut

let [var1, ,var2, ...newArray] = myArray;

console.log(`var 1 = ${var1}`);
console.log(`var 2 = ${var2}`);
console.log(newArray);