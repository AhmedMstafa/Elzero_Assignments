let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

let arr1 = [...numsOne, ...numsTwo];
console.log(arr1);

let arr2 = numsOne.concat(numsTwo);
console.log(arr2);

let arr3 = [];
arr3.push(...numsOne, ...numsTwo);
console.log(arr3);

let arr4 = [];
arr4.splice(0, 0, ...numsOne, ...numsTwo);
console.log(arr4);

let arr5 = [];
arr5.unshift(...numsOne, ...numsTwo);
console.log(arr5);

let arr6 = [];
Array.prototype.push.apply(arr6, [...numsOne, ...numsTwo]);
console.log(arr6);


// Needed Output
// [1, 2, 3, 4, 5, 6]