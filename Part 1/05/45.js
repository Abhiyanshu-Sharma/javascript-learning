// Function Expression

const singHappyBirthday = function () {
    console.log("Happy Birthday to you");
}

const sumTwoNumbers = function (n1, n2) {
    return n1 + n2;
}

const sumThreeNumbers = function (n1, n2, n3) {
    return n1 + n2 + n3;
}

const isEven = function (n1) {
   return n1 % 2 === 0;
}

const firstChar = function (s) {
    return s[0];
}

const findTarget = function (array, target) {
    for(let i = 0; i < array.length;i++) {
        if(array[i] === target){
           return i;
        }
    }
    return -1;
}