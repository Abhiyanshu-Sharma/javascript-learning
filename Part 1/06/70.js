// optional chaining

let user = {
    firstName : 'Abhiyanshu',
    // address : {houseNumber: '1234'}
};

console.log(user?.firstName);
console.log(user?.address);
console.log(user?.address?.houseNumber);  
