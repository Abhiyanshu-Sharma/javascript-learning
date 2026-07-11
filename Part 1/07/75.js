// arrow functions

const user1 = {
    firstName: "Abhiyanshu",
    age: 10,
    about: () => {
        console.log(this.firstName, this.age);
    }
};

user1.about();