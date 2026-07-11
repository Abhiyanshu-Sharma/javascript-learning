// Object destructuring

const band = {
    bandName: "led zeppelin",
    famousSong: "stairway to heaven",
    year: 1968,
    famousSong2: "kashmir"
}

// const bandName = band.bandName;
// const famousSong = band.famousSong;

// console.log(bandName , famousSong);

// Shortcut

let {bandName: var1, famousSong: var2, ...restProps} = band;
console.log(var1, var2, "------" ,restProps);