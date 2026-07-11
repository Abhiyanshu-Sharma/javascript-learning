// Spread Operator

const arr1 = [1, 2, 3];
const arr2 = [5, 6, 7];

// const newArr = [...arr1, ...arr2];
// const newArr = [..."abcd"];
const newArr = [..."123456789"];
console.log(newArr);

// Spread Operator in Objects
const obj1 = {
    key1 : "val 1",
    key2 : "val 2",
    // key1 : "val 67"
};

const obj2 = {
    key1 : "Unique val",
    key3 : "val 3",
    key4 : "val 4"
};

const newObj = {...obj1, ...obj2};
const newObj2 = {...obj2, ...obj1, key67: "new val"};
const newObj3 = {..."abcd"};

console.log(newObj);
console.log(newObj2);
console.log(newObj3);
// console.log(obj1);