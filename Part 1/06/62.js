// every method

const numbers = [2, 4, 6, 8, 10];

const isEven = numbers.every((number) => number%2 === 0);

// callback function --> true/false (boolean)
// every method --> true/false (boolean)

console.log(isEven);

const userCart = [
    {
        productId : 1,
        productName: "Mobile",
        price: 12000
    },
    {
        productId : 2,
        productName: "Laptop",
        price: 62000
    },
    {
        productId : 3,
        productName: "TV",
        price: 15000
    },
];

// check every product price < 30000
const priceLess = userCart.every((cartItem) =>cartItem.price < 70000 );

console.log(priceLess);