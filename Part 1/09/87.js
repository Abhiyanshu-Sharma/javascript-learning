class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
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

const animal1 = new Animal("Tom", 2);
console.log(animal1);
console.log(animal1.eat());
console.log(animal1.isCute());
console.log("------------------------");

// dog class
class Dog extends Animal {
    
}

const dog1 = new Dog("Tommy", 3);
console.log(dog1);
console.log(dog1.eat());
console.log(dog1.isCute());
