let chosen = 1;

let myFrieds = [
  { titel: "Osama", age: 39, availble: true, skills: ["HTML", "CSS"] },
  { titel: "Ahmed", age: 25, availble: false, skills: ["Phthon", "Django"] },
  { titel: "Sayed", age: 33, availble: true, skills: ["PHP", "Laravel"] },
];

let {
  titel,
  age,
  availble,
  skills: [first, second],
} = myFrieds[chosen];

console.log(titel, age, `${availble ? "Available" : "Not Available"}`, second);
