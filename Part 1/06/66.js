// iterables
// On which we can use for of loop
// string, array are iterable

const firstName = "Harshit";
for(let char of firstName) {
    console.log(char);
}

const items = ["item1", "item2", "item3"];
for(let item of items) {
    console.log(item);
}

// const users = {
//     "key1" : "val1",
//     "key2" : "val2",
//     "key3" : "val3",
//     "key4" : "val4",
// };
// for(let user of users) {
//     console.log(user);
// }
// TypeError: users is not iterable

//Array like Objects
// which has length property, or we can access them with index
// example - string

const firstName1 = "Abhiyanshu";
console.log(firstName1.length);
console.log(firstName1[2]);