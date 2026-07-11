const userMethods = {
    about : function() {
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18 : function() {
        return this.age >= 18;
    }
};

function createUser(firstName, lastname, email, age, address) {
    const user = {};
    user.firstName = firstName;
    user.lastname = lastname;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    
    return user;
}

const customUser = createUser("harsh", "Ahuja", " Harsh@gmail.com", 19, "Jeevan Jyoti Colony");
const customUser2 = createUser("Abhiyanshu", "Sharma", " Abhi@gmail.com", 21, "SDL");


// This too has some problem will discuss in next example.