let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
];

document.write(`<div>We Have X Admins</div>`);

document.write(`<div>We Have ${myAdmins.indexOf("Stop")} Admins`);

for (let i = 0; i < myAdmins.length; i++) {
  if (myAdmins[i] === "Stop") break;
  document.write(`<hr>`);
  document.write(`<div>`);
  document.write(`The Admin For Team ${i + 1} is ${myAdmins[i]}`);
  document.write(`<h3>Team Members: </h3>`);
  let counter = 0;
  for (let j = 0; j < myEmployees.length; j++) {
    if (myAdmins[i][0] === myEmployees[j][0]) {
      counter++;
      document.write(`<p>- ${counter} ${myEmployees[j]}</p>`);
    }
  }
  document.write(`</div>`);
}
