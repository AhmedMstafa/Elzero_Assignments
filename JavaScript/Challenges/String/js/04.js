/*
String Challenge
*/

let a = "Elzero Web School";

//Include This Methods In Your Solution [Slice, charAt]
console.log(a.charAt(2).toLocaleUpperCase() + a.slice(3, 6)); // Zero

// 8 H 
console.log(a.substring(a.length - 4, a.length - 3).toUpperCase().repeat(8)); // HHHHHHHH

// Return Array
console.log(a.split(" ", 1)); // [Elzero]

// Use only "subsrt" Method + Template Literals In Your Solution
console.log(a.substr(0, 6) + " " + a.substr(-6)); // Elzero School

//Solution Must Be Dynamic And String May Change
console.log(a[0].toLocaleLowerCase() + a.slice(1, a.length - 1).toUpperCase() + a.slice(a.length - 1)); // eLZERO WEB SCHOOl