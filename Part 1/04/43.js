// nested destructuring

const users = [
    {
        userId : 1,
        firstName : "Abhiyanshu",
        gender : "Male"
    },
    {
        userId : 2,
        firstName : "Harsh",
        gender : "Male"
    },
    {
        userId : 3,
        firstName : "Deepansh",
        gender : "Male"
    }
];

// const [user1, user2, user3] = users;
// console.log(user1);
// console.log(user2);
// console.log(user3);

const [{firstName: hehe}, , {gender: haha}] = users;
console.log(hehe);
console.log(haha);