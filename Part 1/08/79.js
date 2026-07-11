const userMethods = {
    about : function() {
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18 : function() {
        return this.age >= 18;
    },
    sing : function () {
        return 'toon na na na la la';
    }
};

function createUser(firstName, lastname, email, age, address) {
    // const user = {};
    const user = Object.create(userMethods);
    user.firstName = firstName;
    user.lastname = lastname;
    user.email = email;
    user.age = age;
    user.address = address;

    // Now we have to this again and again
    // Why we commented this see 80.js
    // user.about = userMethods.about;
    // user.is18 = userMethods.is18;
    // user.sing = userMethods.sing;
    
    return user;
}

const customUser = createUser("harsh", "Ahuja", " Harsh@gmail.com", 19, "Jeevan Jyoti Colony");
const customUser2 = createUser("Abhiyanshu", "Sharma", " Abhi@gmail.com", 21, "SDL");


// This too has some problem will discuss in next example.