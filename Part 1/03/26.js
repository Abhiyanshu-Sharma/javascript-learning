// Intro to array

let fruits = ["apple", "mango", "grapes"];
let number = [1,2,3,4];
let mixed = [1, 22, 23, "str", null, undefined]

console.log(fruits);
console.log(fruits[2]);
console.log(mixed);
console.log(number);

let fruits2 = ["apple", "mango", "grapes"];

console.log(fruits2);
fruits2[1] = "Banana";
console.log(fruits2);
console.log(typeof fruits2);
console.log(Array.isArray(fruits2));
// console.log(Array.isArray(obj));