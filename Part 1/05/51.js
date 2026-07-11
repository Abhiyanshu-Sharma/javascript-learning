// Default parameters

// const addTwo = (a, b) => {
//     if(typeof b === 'undefined'){
//         b = 0;
//     }
    
//     return a + b;
// }   

//  Shortcut

const addTwo = (a, b=0) => {  
    return a + b;
}   