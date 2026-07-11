// Difference btw dot and bracket notation

const key = "email";
const person = {
    name: "Abhiyanshu",
    age: 21,
    "person hobbies": ["guitar", "sleeping", "listening music"] 
};

console.log(person["person hobbies"]);

person[key] = "abhiyanshu@gmail.com";
console.log(person);