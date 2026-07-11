// Function returing Function

// function myFunc() {
//     function hello() {
//         // console.log("Hello World");
//         return "hello World";
//     }
//     return hello;
// }

function myFunc() {
    return function() {
        return "Hello World"
    }
}

console.log(myFunc());
const ans = myFunc();
console.log(ans());