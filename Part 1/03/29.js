// How to clone array

let arr1 = ["item1", "item2"];
// let arr2 = ["item1", "item2"]; Very very ineffective

// let arr2 = arr1.slice(0); // faster
// or
// let arr2 = [].concat(arr1);

// Spread operator
// let arr2 = [...arr1];

// How to concate an array

// let arr2 = arr1.slice(0).concat(["item3" , "item4" , "item5"]);
// let arr2 = [].concat(arr1, ["item3" , "item4" , "item5"]);
let moreArray = ["item3" , "item4" , "item5"];
let arr2 = [...arr1, ...moreArray];

arr1.push("item3");
console.log(arr1 === arr2);
console.log(arr1);
console.log(arr2);