// typeof operator

// data types (primitive data types)
// string
// number
// boolean
// undefined
// null
// BigInt
// Symbol

let age = 22;
let firstName = 'Abhiyanshu';

console.log(typeof age); // number

// number to string
// 22 -> "22"
console.log(typeof (age + "")); // string

// string to number
console.log(typeof ( +"34")); // number

// String to number and vice versa
let age1 = '20';
console.log(typeof age1);
age1 = Number(age1);
console.log(typeof age1);