//Map
// Stores data in ordered fashion
// Stores key value pairs (like objects)
// Duplicate key are not allowed (like objects)


// Difference btw Map and Object
// In map, you can use anything as a key
//      like array, number, string

// where as, 
// In objects, you can only use string or symbol as key


// Object literal
const person = {
    firstName : "Abhiyanshu",
    age : 7,
    1 : "one"
};
console.log(person.firstName);
console.log(person["age"]);
console.log(person["1"]);

for(let key in person) {
    console.log(typeof key);
}

// Map
const person1 = new Map();
person1.set("firstName", "Abhiyanshu");
person1.set("age", 21);
person1.set(1, "one");
person1.set({1 : "one"}, "Object__");
person1.set([1,2,3,4], "someArray");

console.log(person1);
console.log(person1.get("firstName"));
console.log(person1.get("age"));
console.log(person1.get(1));
console.log(person1.keys());

for(let key of person1.keys()) {
    console.log(key, typeof key);
}

for(let [key, value] of person1) {
    // console.log(Array.isArray(key));
    console.log(key, value);
}

// const person2 = new Map([["firstName", "Abhiyanshu"], ["age", 7]]);
// console.log(person2);

const person2 = {
    id: 1,
    firstName: "harshit"
};

const person3 = {
    id: 2,
    firstName: "harshita"
};

const userInfo = new Map();
userInfo.set(person2, {age: 8, gender: "male"});
userInfo.set(person3, {age: 9, gender: "female"});
// console.log(userInfo);
console.log(person2.id);
console.log(userInfo.get(person2).gender);
console.log(userInfo.get(person3).gender);