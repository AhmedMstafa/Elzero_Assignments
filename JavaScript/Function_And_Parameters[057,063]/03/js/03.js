function ageInTime(theAge) {
  if (theAge > 100 || theAge < 10) {
    console.log("Age Out Of Range");
    return;
  }

  let daysInYear = 365;
  let hoursInYear = daysInYear * 24;
  let minutesInYear = hoursInYear * 60;
  let secondsInYear = minutesInYear * 60;
  let weaksInYear = daysInYear / 7;
  let monthsInYear = daysInYear / 12;

  console.log(`Sedonds Example => ${theAge * secondsInYear}`);
  console.log(`Minutes Example => ${theAge * minutesInYear}`);
  console.log(`Hours Example   => ${theAge * hoursInYear}`);
  console.log(`Days Example    => ${theAge * daysInYear}`);
  console.log(`Weeks Example   => ${theAge * weaksInYear}`);
  console.log(`Months Example  => ${theAge * monthsInYear}`);
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months
