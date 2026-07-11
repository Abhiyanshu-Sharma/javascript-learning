// find method

const myArray = ["Hello", "cat", "dog", "lion"];

const length3 = myArray.find(
    (string) => string.length === 3
);

console.log(length3);

const users = [
    {
        userId : 1,
        userName : "Abhiyanshu"
    },
    {
        userId : 2,
        userName : "Harsh"
    },
    {
        userId : 3,
        userName : "Nitish"
    },
    {
        userId : 4,
        userName : "Mohit"
    },
    {
        userId : 5,
        userName : "Aaditya"
    }
    
];

const myUser = users.find((user) => user.userId === 3);

console.log(myUser);