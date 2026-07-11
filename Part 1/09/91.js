// Static methods and properties

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    static classInfo() {
        return `this is Person class`;
    }

    static desc = "static Property";


    setName(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    setFullName() {
        const[firstName, lastName] = fullname.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }

    eat() {
        return `${this.name} is eating`;
    }

    isSuperCute() {
        return this.age <= 1;
    }

    isCute() {
        return true;
    }
}

const person1 = new Person("Abhiyanshu", "Sharma");
// person1.classInfo();

console.log(Person.classInfo());
console.log(Person.desc);


  