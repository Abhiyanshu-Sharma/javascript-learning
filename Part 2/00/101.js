function myFunc() {
    let counter = 0;
    return function func() {
        if(counter < 1) {
            console.log("Hi, You Called Me !!"); 
            counter++;
        }else {
            console.log("you already called me!"); 
        }
       
    }
}


const result = myFunc();
result();
result();

const result2 = myFunc();
result2();
result2();