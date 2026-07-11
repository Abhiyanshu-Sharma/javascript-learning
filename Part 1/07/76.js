// Short syntax

const user1 = {
    firstName: 'Abhiyanshu',
    age: 8,
    about() {
        console.log(this.firstName, this.age);
    }
};

user1.about();