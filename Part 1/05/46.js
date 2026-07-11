// Arrow functions

const singHappyBirthday = () => {
    console.log("Happy Birthday to you");
}

const sumTwoNumbers = (n1, n2) => {
    return n1 + n2;
}

const sumThreeNumbers = (n1, n2, n3) => {
    return n1 + n2 + n3;
}

const isEven = n1 => n1 % 2 === 0;


const firstChar = s => s[0];


const findTarget = (array, target) => {
    for(let i = 0; i < array.length;i++) {
        if(array[i] === target){
           return i;
        }
    }
    return -1;
}