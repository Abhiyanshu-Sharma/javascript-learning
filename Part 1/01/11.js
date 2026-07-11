// undefined 

let firstName;
console.log(typeof firstName);
firstName = 'abhi';
console.log(typeof firstName, firstName);

// null

const firstName1 = null;
console.log(typeof firstName1);
console.log(null);

// BigInt
let n = 123;
console.log(typeof n);

console.log(Number.MAX_SAFE_INTEGER);

let n1 = BigInt(389742089724895397689347896348);
console.log(typeof n1);

// another way
let n2 = 123n;
console.log(typeof n2);