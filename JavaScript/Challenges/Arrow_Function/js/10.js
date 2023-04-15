/*
  Function Arrow Challenges
*/

// [1] One Statement In Function
// [1] Convert To Arrow Function
// [1] Print The Output [Arguments May Change]


// let names = function (...na) {
//   return `${typeof na.join()} [${na.join("], [")}] => Done !`;
// };

let names = (...n) => `${typeof n.join()} [${n.join("], [")}] => Done !`;

console.log(names("Osama", "MOhamed", "Ali", "Ibrahim", "Ahmed"));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

/* ================================================= */

// [1] Replace ??? In Return Statement To Get The Output
// [1] Create The Same Function With REgular Syntax
// [1] Use Arra Inside The Arguments To Get The Output

let myNumbers = [20, 50, 10, 60];

let calc = (one, two, ...nums) => two - one + nums[one % one] - nums[one / one];

console.log(calc(10, 60, 50, 20)); // 80