// same method in sub class

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

// dog class
class Dog extends Animal {
    constructor(name, age, speed) {
        super(name, age);
        this.speed = speed;
    }

    run() {
        return `${this.name} is running at ${this.speed}kmph`;
    }

    eat() {
        return `Modified Eat: ${this.name} is eating`;
    }
}

const dog1 = new Dog("Tommy", 3, 25);
console.log(dog1.run());
console.log(dog1.eat());

