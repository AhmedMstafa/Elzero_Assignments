/*
  Arrays Challenges
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here

console.log(my)

console.log(my.reverse().slice(my.length / counter)); // ["Osama", "Elham", "Mazero", "Ahmed"]

console.log(my.slice(counter, my[zero].length)); // ["Elham", "Mazero"]

console.log(my[counter].slice(zero, -counter).concat(my[counter * counter - my[zero].length].slice(my[zero].length - counter))); // "Elzero"

console.log(my[zero].split("").pop().concat(my[counter * counter - my[zero].length].split("").pop().toUpperCase())); // "rO"


