let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here

allArrs = (arr1.pop() + arr2.slice(arr1.length).join(""))
  .split("")
  .sort()
  .join("")
  .toLocaleLowerCase();

console.log(allArrs); // fxy
