// Function declaration & Hoisting 

console.log(this);
console.log(window);
console.log(myFunc);
console.log(fullName);

function myFunc() {
    console.log("This is my function");
}

var firstName = "Abhiyanshu";
var lastName = "Sharma";
var fullName = firstName + " " + lastName;
console.log(fullName);