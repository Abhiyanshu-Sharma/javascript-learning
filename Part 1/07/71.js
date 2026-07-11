// methods -> function inside object

 function personInfo() {
        console.log(`person name is ${this.firstName} and age is ${this.age}`);
    };

const person = {
    firstName: "Abhiyanshu",
    age: 21,
    about: personInfo
};

const person2 = {
    firstName: "Harsh",
    age: 20,
    about: personInfo
};

const person3 = {
    firstName: "Deepansh",
    age: 21,
    about: personInfo
};


person.about();
person2.about();
person3.about();