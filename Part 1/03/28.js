// primitive vs reference data types

let n = 6;
let n2 = n;

console.log("n = " + n);
console.log("n2 = " + n2);
n++;
console.log("after increasing value of n by 1");
console.log("n = " + n);
console.log("n2 = " + n2);

// Refernce type

// array
let a1 = ["item1", "item2"]; 
let a2 = a1;

console.log("a1 = " + a1 );
console.log("a2 = " + a2);
a1.push("item3");
console.log("after pushing element to a1");
console.log("a = " + a1);
console.log("a2 = " + a2);