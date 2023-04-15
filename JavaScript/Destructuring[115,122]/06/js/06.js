let chosen = 1;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

// Write Your Code Here

// If chosen === 1

// "Osama"
// 39
// "Available"
// "CSS"

// If chosen === 2

// "Ahmed"
// 25
// "Not Available"
// "Django"

// If chosen === 3

// "Sayed"
// 33
// "Available"
// "Laravel"

if (chosen === 1) {
  [{ title, age, available, skills: [one, two] }] = myFriends;
  console.log(title);
  console.log(age);
  console.log(available ? "Available" : "Not Avilable");
  console.log(`${one} ${two}`);
} else if (chosen === 2) {
  [, { title, age, available, skills: [one, two] }] = myFriends;
  console.log(title);
  console.log(age);
  console.log(available ? "Available" : "Not Avilable");
  console.log(`${one} ${two}`);
} else {
  [, , { title, age, available, skills: [one, two] }] = myFriends;
  console.log(title);
  console.log(age);
  console.log(available ? "Available" : "Not Avilable");
  console.log(`${one} ${two}`);
}