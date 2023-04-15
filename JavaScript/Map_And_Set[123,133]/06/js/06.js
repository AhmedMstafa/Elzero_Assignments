let theName = "Elzero";

let str1 = theName.split("");
console.log(str1);
let str2 = [...theName];
console.log(str2);
let str3 = Array.from(theName);
console.log(str3);
let str4 = theName;
str4 = Array.prototype.filter.call(str4, eachChar => eachChar !== ',');
console.log(str4);
let str5 = theName;
str5 = [...str5.replace(",", "")]
console.log(str5);

// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']