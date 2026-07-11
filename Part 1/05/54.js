// callback functions

// function myFunc(a) {
//     console.log(a);
//     console.log("Hello World \n");
// }

// myFunc([1,2,3]);
// myFunc("abc");
// myFunc({name: "Abhiyanshu"});
// myFunc();

function myFunc2(name) {
    console.log("inside function 2");
    console.log(`Your name is ${name}`);
}

function myFunc(callback) {
    console.log(callback);
    console.log("Hello there I am Function 1 and i can call");
    callback("Abhiyanshu");
}



myFunc((myFunc2));