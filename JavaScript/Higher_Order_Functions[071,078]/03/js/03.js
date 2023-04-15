let myArray = ["E", "l", "z", ["e", "r"], "o"];


let newArray = myArray.reduce(function (e, c) {
  return `${e}${c}`.split(",")
}).join("")


console.log(newArray)
// Elzero