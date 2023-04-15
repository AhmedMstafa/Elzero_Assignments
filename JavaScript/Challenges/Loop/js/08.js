/*
Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amagad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia"]

document.write(`<div>We Have X Admins</div>`);



for (i = 0; i < myAdmins.length; i++) {
  if (myAdmins[i] === "Stop") {
    document.write(`<div>We Have ${myAdmins.indexOf("Stop")} Admins</div>`);
    for (j = 0; j < myAdmins.indexOf("Stop"); j++) {
      document.write(`<hr>`);
      document.write(`<div> "The Admin For Team ${j + 1} is ${myAdmins[j]}"`);
      document.write(`<h3>Team Members: </h3>`);
      let counter = 0;
      for (e = 0; e < myEmployees.length; e++) {
        if (myEmployees[e][0] === myAdmins[j][0]) {
          counter += 1;
          document.write(`<p>- ${counter} ${myEmployees[e]}</p>`);
        }
      }
      document.write(`</div>`);
      document.write(`<hr>`);
    }
  }
}