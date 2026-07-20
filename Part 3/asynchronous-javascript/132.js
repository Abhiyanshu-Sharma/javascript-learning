// understand callbacks

function myFunc(callback) {
    console.log("Function is doing task 1");
    callback();
}

 myFunc(() => {
  console.log("function is doing task 2");
});