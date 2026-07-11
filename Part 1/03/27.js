// array push pop

// array shift unshift

let fruits = ["apple", " mango", "grapes"];
console.log(fruits);

// push - adds element at last
fruits.push("banana");
console.log(fruits);

//pop - removes last element
let poppedFruit = fruits.pop();
console.log(fruits);
console.log("Popped fruit is: " + poppedFruit);

// unswift - adds element at first
fruits.unshift("banana");
console.log(fruits);

// shift - removes first element
let removedFruit = fruits.shift();
console.log(fruits);
console.log("Removed fruit is: " + removedFruit);