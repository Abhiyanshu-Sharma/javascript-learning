// Map method

const n = [3, 4, 6, 1, 8];

// const square = (number) => {
//     return number * number;
// }

// const squaredN = n.map(square);
// console.log(squaredN);

const squaredN = n.map(
    (number, index) => {
        return `index: ${index} and ${number*number}`;
    }
);
// console.log(squaredN);

const users = [
    {firstName: "Abhiyanshu", age: 21},
    {firstName: "Harsh", age: 20},
    {firstName: "Deepansh", age: 22},
];

const userNames = users.map(
    (user) => {
        return user.firstName;
    }
);

console.log(userNames);