// How to iterate object

const person = {
    name: "Abhiyanshu",
    age: 21,
    "person hobbies": ["guitar", "sleeping", "listening music"] 
};

// for in loops

for (let key in person) {
    // console.log(`${key} : ${person[key]}`);
    console.log(key, " : " , person[key]);
}

// Object.keys
// console.log(Object.keys(person));
const val = Array.isArray(Object.keys(person));
console.log(val); // true


for (let key of Object.keys(person)) {
    console.log(person[key]);
}

