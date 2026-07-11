function hello() {
    console.log("hello world");
}

// const hello = ["value1"];

// javascript function ==> function + object

console.log(hello.name);
// name property -> tells function name

// you can add your own properties
hello.myProperty = "this is unqiue property"; 

console.log(hello.myProperty);

// function provides more usefull properties

// hello.prototype; // {}
// only functions provide prototype property

if (hello.prototype) {
    console.log("Prototype is present");
} else {
    console.log("Prototype is not present");
}

hello.prototype.abc = "abc";
hello.prototype.xyz ="xyz";
hello.prototype.sing = function() {
    return "la la la la";
} 

console.log(hello.prototype);
console.log(hello.prototype.sing());