// Function inside Function

const app = () => {
    const myFunc = () => console.log("Hello from my func");

    const add2Number = (n1, n2) => n1 + n2; 

    const multiply2Number = (n1, n2) => n1 * n2; 

    console.log("inside app");
    myFunc();
    console.log(add2Number(2,3));
    console.log(multiply2Number(2,3));
}

app();