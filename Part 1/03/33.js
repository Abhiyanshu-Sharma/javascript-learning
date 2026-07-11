// for of loop in array

const fruits = ["apple" , "mango", "grapes", "banana"];
const fruits2 = [];

// Advanced for loop
for(let index of fruits) {
    fruits2.push(index.toUpperCase());
}

console.log(fruits);
console.log(fruits2);