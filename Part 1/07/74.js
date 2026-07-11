const user1 = {
    firstName: 'Abhiyanshu',
    age: 8,
    about: function () {
        console.log(this);
        console.log(this.firstName, this.age);
    }
};

// Don't do this mistake

// user1.about();
// const myFunc = user1.about;
// myFunc();

const myFunc = user1.about.bind(user1);
myFunc();