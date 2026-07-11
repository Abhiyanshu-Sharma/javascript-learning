// Important Array methods

// forEach
// map
// filter
// reduce

const n = [4, 2, 5, 8];

function multiplyby2(number, index) {
    console.log(`index is ${index} and number is ${number}`);
    console.log(`${number} multiplied by 2 is: ${number*2}`);
}

// multiplyby2(n[0], 0);
// multiplyby2(n[1], 1);
// multiplyby2(n[2], 2);
// multiplyby2(n[3], 3);

// for(let i = 0; i < n.length; i++) {
//     multiplyby2(n[i], i);
// }

// n.forEach(multiplyby2);

n.forEach(
    function(number, index) {
        console.log(`index is ${index} and number is ${number}`);
        console.log(`${number} multiplied by 2 is: ${number*2}`);
    }
);

const users = [
    {firstName: "Abhiyanshu", age: 21},
    {firstName: "Harsh", age: 20},
    {firstName: "Deepansh", age: 22},
];

users.forEach(
    // function(user){
    //     console.log(user.firstName);
    // }
    // or
    (user) => {
        console.log(user.firstName);
    }
);

for(let user of users) {
    console.log(user.age);
}   