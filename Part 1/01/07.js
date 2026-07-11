// Basic Methods of String

let firstName ='    Abhiyanshu    ';
console.log(firstName.length); // 18

// trim()
console.log(firstName.trim().length); // 10

// toUpperCase()
console.log(firstName.trim().toUpperCase()); // ABHIYANSHU

// toLowerCase
console.log(firstName.trim().toLowerCase()); // abhiyanshu

let newName = 'Abhiyanshu';

// slice(int start index, int end index)
console.log(newName.slice(0,4));

console.log(newName.slice(4,8));

console.log(newName.slice(4));