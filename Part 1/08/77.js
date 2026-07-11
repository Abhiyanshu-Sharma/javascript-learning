// Proto type

const user1 = {
    firstName: "Abhiyanshu",
    lastname: "sharma",
    email: "abhiyanshusharma@gmail.com",
    age: 21,
    address: "Housh Number, Colony, pincode, state",
    about: function() {
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18: function() {
        return this.age >= 18;
    } 
};

// console.log(user.about());

// Instead of creating multiple objects like user we do ->

function createUser(firstName, lastname, email, age, address) {
    const user = {};
    user.firstName = firstName;
    user.lastname = lastname;
    user.email = email;
    user.age = age;
    user.address = address;

    // We have write this part again and again
    user.about = function() {
        return `${this.firstName} is ${this.age} years old.`;
    };
    user.is18 = function() {
        return this.age >= 18;
    };

    return user;
}

const customUser = createUser("harsh", "Ahuja", " Harsh@gmail.com", 19, "Jeevan Jyoti Colony");

console.log(customUser);
console.log(customUser.is18());
console.log(customUser.about());

// This has some problem will discuss in next example.
// which is see above