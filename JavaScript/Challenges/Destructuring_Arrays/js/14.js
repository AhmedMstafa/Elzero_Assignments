/*
  Destructuring
  - Challenge
*/

let chosen = 1;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];



if (chosen === 1) {
  [{ title, age, available, skills: [A, B] },] = myFriends;
  console.log(title);
  console.log(age);
  console.log(available ? "Avilable" : "Not Available");
  console.log(A, B);
} else if (chosen === 2) {
  [, { title, age, available, skills: [A, B] },] = myFriends;
  console.log(title);
  console.log(age);
  console.log(available ? "Avilable" : "Not Available");
  console.log(A, B);
} else {
  [, , { title, age, available, skills: [A, B] }] = myFriends;
  console.log(title);
  console.log(age);
  console.log(available ? "Avilable" : "Not Available");
  console.log(A, B);
}