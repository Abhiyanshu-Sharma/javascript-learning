// Filter method

const n = [1,3,2,6,4,8];

// const isEven = (number) => {
//         return number%2===0;
//     }

const evenNumbers = n.filter(
    (number) => {
        return number%2===0;
    }
);
console.log(evenNumbers);