// some method

const numbers = [3, 5, 8, 9];

const atleastOneIsEven = numbers.some((number) => number%2 === 0);

console.log(atleastOneIsEven);

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

const priceLess = userCart.some((cartItem) =>cartItem.price < 30000 );

console.log(priceLess);