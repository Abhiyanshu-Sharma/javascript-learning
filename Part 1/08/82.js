// const userMethods = {
//     about : function() {
//         return `${this.firstName} is ${this.age} years old.`;
//     },
//     is18 : function() {
//         return this.age >= 18;
//     },
//     sing : function () {
//         return 'toon na na na la la';
//     }
// };

function createUser(firstName, lastname, email, age, address) {
    // const user = {};
    const user = Object.create(createUser.prototype);
    user.firstName = firstName;
    user.lastname = lastname;
    user.email = email;
    user.age = age;
    user.address = address;
    
    return user;
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
const customUser = createUser("harsh", "Ahuja", " Harsh@gmail.com", 19, "Jeevan Jyoti Colony");
const customUser2 = createUser("Abhiyanshu", "Sharma", " Abhi@gmail.com", 21, "SDL");
const customUser3 = createUser("Deepansh", "Soni", "Deepansh@gmail.com", 21, "JBP Damo naka");

console.log(customUser.sing());