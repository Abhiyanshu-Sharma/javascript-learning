// new keyword

// function createUser(firstName, age) {
//     this.firstName = firstName;
//     this.age = age;
// }
// createUser.prototype.about = function() {
//     console.log(this.firstName, this.age); 
// }

// const user1 = new createUser("Abhiyanshu", 21);

// // 1) empty object this = {}
// // 2) return this

// console.log(user1);
// user1.about();

// Constructor function 
function createUser(firstName, lastname, email, age, address) {
    this.firstName = firstName;
    this.lastname = lastname;
    this.email = email;
    this.age = age;
    this.address = address;
    
    return this;
};

createUser.prototype.about =  function() {
        return `${this.firstName} is ${this.age} years old.`;
    };
createUser.prototype.is18 = function() {
        return this.age >= 18;
    };
createUser.prototype.sing =  function () {
        return 'toon na na na la la';
    };

console.log(createUser.prototype);
const customUser = new createUser("harsh", "Ahuja", " Harsh@gmail.com", 19, "Jeevan Jyoti Colony");
const customUser2 = new  createUser("Abhiyanshu", "Sharma", " Abhi@gmail.com", 21, "SDL");
const customUser3 = new  createUser("Deepansh", "Soni", "Deepansh@gmail.com", 21, "JBP Damo naka");

console.log(customUser.is18());