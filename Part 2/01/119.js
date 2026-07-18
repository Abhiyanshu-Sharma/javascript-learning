// how to get the dimensions of element

// height weight
const sectionTodo = document.querySelector(".section-todo");
const info = sectionTodo.getBoundingClientRect();

console.log(info);