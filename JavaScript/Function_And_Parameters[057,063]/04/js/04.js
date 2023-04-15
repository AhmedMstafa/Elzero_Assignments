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

function showDetails(a, b, c) {
  let details = [a, b, c],
    Name = "" || "Unknown",
    Age = 0 || 0,
    Status = false || false;
  for (let i = 0; i < details.length; i++) {
    typeof details[i] === "string" ? Name = details[i] : typeof details[i] === "number" ? Age = details[i] : Status = details[i];
  }
  Status === true ? console.log(`Hello ${Name}, Your Age Is ${Age}, You Are Available For Hire`) : console.log(`Hello ${Name}, Your Age Is ${Age}, You Are Not Available For Hire`);
}


showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

