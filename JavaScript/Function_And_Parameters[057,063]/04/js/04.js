function checkStatus(a, b, c) {
  let name, age, isAvailable;
  let messageOne = "You Are Available For Hire";
  let messageTwo = "You Are Not Available For Hire";
  name =
    typeof a === "string"
      ? a
      : typeof b === "string"
      ? b
      : typeof c === "string"
      ? c
      : "";
  age =
    typeof a === "number"
      ? a
      : typeof b === "number"
      ? b
      : typeof c === "number"
      ? c
      : "";
  isAvailable =
    typeof a === "boolean"
      ? a
      : typeof b === "boolean"
      ? b
      : typeof c === "boolean"
      ? c
      : "";

  console.log(
    `Hello ${name}, Your ${age} Is 38, You Are ${
      isAvailable ? messageOne : messageTwo
    }`
  );
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
