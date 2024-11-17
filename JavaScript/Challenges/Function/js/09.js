/*
Function -Random Argument Challenge
===================================
Create Function showDetails
Function Accept 3 Parameters [a, b, c]
Data Types For Info Is
-String => Name
-Number => Age
-Boolen => Status
-Argument Is Random
Data Is NOt Sorted Output Depend On Data Types 
- Use Ternary Conditional Operator
*/

function showDetails(one, two, three) {
  let name, age, isAvilable;

  let details = [one, two, three];

  for (let i = 0; i < details.length; i++) {
    typeof details[i] === "string"
      ? (name = details[i])
      : typeof details[i] === "number"
      ? (age = details[i])
      : typeof details[i] === "boolean"
      ? (isAvilable = details[i])
      : 0;
  }

  if (!name || !age || isAvilable == undefined) return "Invalid Input";

  let messageOne = "You Are Avalible For Hire";
  let messageTwo = "You Are Not Avalible For Hire";

  console.log(
    `Hello ${name}, Your Age Is ${age}, ${isAvilable ? messageOne : messageTwo}`
  );
}

showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
