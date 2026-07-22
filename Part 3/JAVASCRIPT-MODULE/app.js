import { age } from "./utils/age.js";
import {firstName as fname} from "./utils/fname.js";
import  Person  from "./utils/Person.js";



console.log(fname, age);

const person = new Person("Abhiyashu", "Sharma", 21);
console.log(person);
person.info();