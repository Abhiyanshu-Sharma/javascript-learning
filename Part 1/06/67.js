// sets
// stores data
// sets have its own method
// No index based access
// Order is not guaranteed
// Unique items only

const numbers = new Set([1,2,3,3,4]);
console.log(numbers);
console.log(numbers[2]);

const items = ["item1", "item2", "item3"];
const numbers1 = new Set();
numbers1.add(1);
numbers1.add(2);
numbers1.add(2);
numbers1.add(3);
numbers1.add(4);
numbers1.add(5);
numbers1.add(6);
numbers1.add(7);
numbers1.add(8);
numbers1.add(9);
numbers1.add(items);
numbers1.add(["item1", "item2", "item3"]);

if(numbers1.has(1)) {
    console.log("1 is present")
} else {
    console.log("1 is not present");
}

for (let number of numbers1) {
    console.log(number);
}

const myArray = [1,2,3,4,4,5,6,5,6];
const uniqueArray = new Set(myArray);

console.log(uniqueArray);
// console.log(uniqueArray.length);
console.log(uniqueArray.size);

let length = 0;
for(let element of uniqueArray) {
    length++;
}
console.log(length);