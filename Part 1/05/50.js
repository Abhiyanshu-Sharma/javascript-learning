// Block scope vs Function scope

// let and const are block scope

// var is function scope

{
    let firstName = "Abhiyanshu";
    const lastName = "Sharma"
}
// console.log(firstName);
// console.log(lastName);

{
    let firstName = "Abhiyanshu";
    console.log(firstName);
    var lastName = "Sharma";
}
console.log(lastName);

