// Function declaration

function singHappyBirthday() {
    console.log("Happy Birthday to you");
}

function sumTwoNumbers(n1, n2) {
    return n1 + n2;
}

function sumThreeNumbers(n1, n2, n3) {
    return n1 + n2 + n3;
}

function isEven(n1) {
   return n1 % 2 === 0;
}

function firstChar(s) {
    return s[0];
}

function findTarget(array, target) {
    for(let i = 0; i < array.length;i++) {
        if(array[i] === target){
           return i;
        }
    }
    return -1;
}

const mya = [1,2,3,4,5,6,7,8,9,0];
console.log("index: " + findTarget(mya, 5));