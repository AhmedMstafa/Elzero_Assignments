let nums = [2, 12, 11, 5, 10, 1, 99];

let sum = nums.reduce(function (e, c) {
  console.log(e, c)
  return e % 2 !== 0 ? e + c * c : e + c + c;
}, 1);

console.log(sum)

// 500