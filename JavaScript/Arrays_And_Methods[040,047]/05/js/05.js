let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions


if (haystack.lastIndexOf(needle) === -1) {
  console.log("Not Found")
} else {
  console.log("Found")
}


if (haystack.indexOf(needle) === -1) {
  console.log("Not Found")
} else {
  console.log("Found")
}

if (haystack.includes(needle) === true) {
  console.log("Found")
} else {
  console.log("Not Found")
}