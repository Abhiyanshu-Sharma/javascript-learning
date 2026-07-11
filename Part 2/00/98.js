// closures

// function that returns function

// function myFunc() {
//     // return 1;
//     // return "One";
//     // return [1,2,4];
//     return {a: "2"};

// }


// function outerFunc() {
//     function innerFunc() {
//         console.log("Hello world");
//     }
//     return innerFunc;
// }

// const ans = outerFunc();

// // console.log(ans);
// ans();


function printFullName(firstName, lastName) {
    function printName() {
        console.log(firstName, lastName);
    }
    return printName;
}

const ans = printFullName("Abhiyanshu", "Sharma");

// console.log(ans);
ans();