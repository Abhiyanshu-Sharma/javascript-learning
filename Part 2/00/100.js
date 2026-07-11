// function myFunc(power) {
//     return function square(n) {
//         return n ** power;
//     }
// }

// or

const myFunc = power => n =>  n ** power;


const cube = myFunc(3);
const ans = cube(3);

console.log(ans);