// sort method
// ASCII Table

const numbers = [5, 9, 1200, 410, 3000];
numbers.sort();

console.log(numbers, "- orignal array is changed");

console.log("Expected output was - 5, 9, 410, 1200, 3000 - but we don't see this");

console.log("[5, 9, 410, 1200, 3000] is actually converted to string\n[53, 57, 49, 52, 51] (ASCII values of the numbers, after conversion to string)");

const userNames = ["Abhiyanshu", "Harsh", "Deepansh", "Mohit", "Nitin", "Neel", "Mukesh"];
userNames.sort();
console.log(userNames);

numbers.sort((a,b) => a-b);
// a - b --> +ve (greater than 0) -> put b first
// a - b --> -ve -> put a first
console.log(numbers);

//Price lowToHigh and highToLow
const products = [
    {
        productId : 1,
        productName: "p1",
        price: 300
    },
    {
        productId : 2,
        productName: "p2",
        price: 3000
    },
    {
        productId : 3,
        productName: "p3",
        price: 200
    },
    {
        productId : 4,
        productName: "p4",
        price: 8000
    },
    {
        productId : 5,
        productName: "p5",
        price: 500
    }
];

// lowToHigh
const lowToHigh = products.slice(0).sort(
    (a,b) => {
        return a.price - b.price;
    }
);

// highToLow
const highToLow  = products.slice(0).sort(
    (a,b) => {
        return b.price - a.price;
    }
);

console.log(lowToHigh);
console.log(highToLow);
