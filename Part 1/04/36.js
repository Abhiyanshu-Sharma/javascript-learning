// Objects
// are reference type

// arrays are but not sufficient for real world data

// Objects store key value pairs
// Objects don't have indexes

// How to create an Object
// const person = {name: "Abhiyanshu", age: 21};
// or
const person = {
    name: "Abhiyanshu",
    age: 21,
    hobbies: ["guitar", "sleeping", "listening music"] 
};
console.log(person + "\n");

// How to access data from objects
console.log(person.name);
console.log(person.age);
console.log(person.hobbies);

console.log(person["name"]);
console.log(person["age"]);
console.log(person["hobbies"]);

// How to add key value pair to the object
person.gender = "male";

console.log(person.gender  + "\n");
console.log(person["gender"]  + "\n");
console.log(person);