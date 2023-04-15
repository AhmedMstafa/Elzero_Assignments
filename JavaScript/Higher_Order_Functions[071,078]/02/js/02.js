let myString = "EElllzzzzzzzeroo";


let nor = myString.split("").filter(function (e, index, array) {
  console.log(e, index, array[index + 1]);
  return e !== array[index + 1]
}).reduce(function (e, c) {
  return `${e}${c}`
});

console.log(nor)
// Elzero