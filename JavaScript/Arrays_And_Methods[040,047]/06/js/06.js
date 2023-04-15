let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
// allArrs += arr1.pop().concat(arr2[arr1.length], arr2.pop()).toLocaleLowerCase().split("").sort();
allArrs += arr2[arr1.length - (arr2.length - arr1.length)].concat(arr1.pop(), arr2.pop()).toLocaleLowerCase();

console.log(allArrs); // fxy