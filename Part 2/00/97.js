// lexical environment, scope chain

const lastName = "Sharma";

const printName = function() {
    const firstName = "Abhiyanshu";
    function myFunction() {
        console.log(firstName);
        console.log(lastName);
    } 
    myFunction();
    
}

printName();