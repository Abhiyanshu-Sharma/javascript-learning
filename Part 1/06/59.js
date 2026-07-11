// reduce method

const numbers = [1, 2, 3, 4, 5, 10];

// aim : sum of all the numbers in the array

const sum = numbers.reduce(
    (accumulator, currentValue) => {
        return accumulator + currentValue;
    }
);

console.log(sum);

// accumulator     currentValue     return
// 1                    2              3 
// 3                    3              6
// 6                    4              10
// 10                   5              15
// 15                   10             25

// Final Output - 25

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
        price: 32000
    },
];

// aim : sum of price of all 3 products

const totalAmount = userCart.reduce(
    (totalPrice, currentPrice) => {
        return totalPrice + currentPrice.price;
    },0);

console.log(totalAmount);