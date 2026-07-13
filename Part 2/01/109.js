// loop

// let navItems = document.getElementsByTagName("a");
// console.log(navItems);

// We can't use forEach method to iterate through HTMLCollection
// Simple loop
// for of loop
// forEach loop

// for(let i = 0; i < navItems.length; i++) {
//     // console.log(navItems[i])
//     const navItem = navItems[i];
//     navItem.style.background = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }

// for(let navItem of navItems) {
//     navItem.style.background = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }

// navItems = Array.from(navItems);
// navItems.forEach(navItem => {
//     navItem.style.background = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// });

const navItems = document.querySelectorAll("a");
// Simple loop
// for of loop
// forEach loop

// for(let i = 0; i < navItems.length; i++) {
//     console.log(navItems[i])
//     const navItem = navItems[i];
//     navItem.style.background = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }

// for(let navItem of navItems) {
//     navItem.style.background = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }

navItems.forEach(navItem => {
    navItem.style.background = "#fff";
    navItem.style.color = "green";
    navItem.style.fontWeight = "bold";
});

console.log(navItems);


