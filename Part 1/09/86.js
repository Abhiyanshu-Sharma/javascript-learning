// class keyword 
// classes are fake 

class CreateUser {
    constructor(firstName, lastName, email, age, address) {
        // console.log("Constructor called");
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
    }

    about() {
        return `${this.firstName} is ${this.age} years old.`;
    }

    is18() {
        return this.age >= 18;
    }

    sing() {
         return 'toon na na na la la';
    }

    func(a) {
        console.log(a);
    }
}

const customUser = new CreateUser("harsh", "Ahuja", " Harsh@gmail.com", 19, "Jeevan Jyoti Colony");
const customUser2 = new CreateUser("Abhiyanshu", "Sharma", " Abhi@gmail.com", 21, "SDL");
const customUser3 = new CreateUser("Deepansh", "Soni", "Deepansh@gmail.com", 21, "JBP Damo naka");

console.log(customUser.firstName);
console.log(Object.getPrototypeOf(customUser));
customUser.func("Harsh's Object - Func method");