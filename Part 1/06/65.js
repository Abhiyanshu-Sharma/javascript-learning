// splice method
// start    delete      insert

const myArray = ["item1", "item2", "item3"];

// delete
// const deletedItems = myArray.splice(1, 2);
// console.log(deletedItems);

// insert
// myArray.splice(1, 0, "inserted item");

// insert and delete
const deletedItems = myArray.splice(1,2, "inserted item1", "inserted item2");

console.log("Deleted items: ", deletedItems);
console.log(myArray);