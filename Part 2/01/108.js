// get multiple elements using getElements by class name
// get multiple elements items using querySelectorAll

const navItems = document.getElementsByClassName("nav-item");
console.log(navItems);
console.log(navItems[0]);
console.log(typeof navItems);

const navItems2 = document.querySelectorAll(".nav-item");
console.log(navItems2);
console.log(navItems2[0]);
console.log(typeof navItems2);