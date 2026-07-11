const obj1 = {
    key1: "value1",
    key2: "value2" 
}

// __proto__

// official ecmascript documentation

// [[prototype]]

// __proto__, [[prototype]]

// prototype

const obj2 = Object.create(obj1);
obj2.key3 = "value3";

console.log(obj2);

console.log(obj2.__proto__);

// __proto__ and prototype both are very different