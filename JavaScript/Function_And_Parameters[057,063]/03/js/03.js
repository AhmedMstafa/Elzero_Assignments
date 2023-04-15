function ageInTime(theAge) {
  // Your Code Here
  if (typeof theAge === "number") {
    if (theAge > 10 && theAge < 100) {
      console.log(`Your Age is ${theAge}
    => ${theAge * 12} Months
    => ${theAge * 12 * 4} Weeks
    => ${theAge * 12 * 4 * 7} Days
    => ${theAge * 12 * 4 * 7 * 24} Hours
    => ${theAge * 12 * 4 * 7 * 24 * 60} Minuts
    => ${theAge * 12 * 4 * 7 * 24 * 60 * 60} Secounds
    `)
    } else {
      console.log("Age Out Of Range")
    }
  } else {
    console.log("Rigth A Number")
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months