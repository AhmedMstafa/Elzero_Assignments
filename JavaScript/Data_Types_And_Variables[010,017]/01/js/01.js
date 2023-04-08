// Add Variables Here

let numberOne = 10;
let numberTow = 20;

// Ouput
console.log(numberOne + "" + numberTow); // Normal Concatenate => 1020
console.log(typeof (numberOne + "" + numberTow)); // Normal Concatenate => String
console.log(`${numberOne}${numberTow}`); // Template Literals Way => 1020
console.log(typeof (`${numberOne}${numberTow}`)); // Template Literals Way => String

console.log(numberOne + "\n" + numberTow);
/*
  Normal Concatenate
  20
  10
*/

console.log(`${numberOne}
${numberTow}`);
/*
  Template Literals Way
  20
  10
*/