// Getters and Setters

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    setName(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    setFullName() {
        const[firstName, lastName] = fullname.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person1 = new Person("Abhiyanshu", "Sharma", 5);
console.log(person1.fullName);
// console.log(person1.firstName);
// console.log(person1.lastName);
// person1.setName("Harsh", "Ahuja");
// console.log(person1.firstName);
// console.log(person1.lastName);
// console.log(person1.fullname);
console.log("-------------------");
person1.fullName = "Harsh Ahuja";
console.log(person1.fullName);