let theName = "Elzero";

// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']

console.log(Array.from(theName));
console.log([...theName]);
console.log(theName.split(""));
console.log(((...rest) => rest)(...theName));
console.log(
  (function () {
    return [...arguments];
  })(...theName)
);
console.log(Array.prototype.filter.call(theName, (eachChar) => eachChar));
