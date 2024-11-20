let myString = "EElllzzzzzzzeroo";

let newString = myString
  .split("")
  .filter((e, i, arr) => {
    return e !== arr[i + 1] ? e : "";
  })
  .reduce((acc, e) => {
    return `${acc}${e}`;
  });

console.log(newString);

// Elzero
