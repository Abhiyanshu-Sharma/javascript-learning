// Hoisting
// This behaviour is know as hoisting

hello();

// hello2(); // Throws error -  ReferenceError: Cannot access 'hello2' before initialization

// hello3(); // Throws error -  ReferenceError: Cannot access 'hello3' before initialization

function hello() {
    console.log("Hello World");
}

const hello2 = function() {
// let or var - still error    
    console.log("Hello World 2");
}

const hello3 = () => {
    console.log("Hello World 3");
}

console.log(hi); // undefined
var hi = "hi";
console.log(hi); // hi

console.log(hey); // ReferenceError: Cannot access 'hey' before initialization
let hey = "hi";
console.log(hey);