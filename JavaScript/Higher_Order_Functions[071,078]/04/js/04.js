let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let nums = numsAndStrings.filter(function (e) {
  return !isNaN(parseInt(e))
}).map(function (e) {
  return -e
})

console.log(nums)
// [-1, -10, 10, 20, -5, -3]