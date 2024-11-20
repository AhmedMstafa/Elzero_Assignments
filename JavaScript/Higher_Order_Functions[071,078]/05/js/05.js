let nums = [2, 12, 11, 5, 10, 1, 99];

let newNums = nums.reduce(
  (acc, e) => (acc % 2 !== 0 ? acc + e * e : acc + e + e),
  1
);

console.log(newNums);

// 500
