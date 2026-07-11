// Function Execution Context

let foo = "foo";
console.log(foo);

function getFullName(firstName, lastName) {
    console.log(arguments);

    let myvar = "var inside function";
    console.log(myvar);

    const fullName = firstName + " " + lastName;
    return fullName;
}

const personName = getFullName("Abhiyanshu", "Sharma");
console.log(personName);