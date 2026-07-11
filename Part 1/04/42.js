// object inside array
// very usefull in real world applications

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

for(let user of users) {
    console.log(user.firstName);
}