let start = 0;
let swappedName = "elZerO";

let temp = "";

for (let i = start; i < swappedName.length; i++) {
  temp +=
    swappedName[i] === swappedName[i].toUpperCase()
      ? swappedName[i].toLowerCase()
      : swappedName[i].toUpperCase();
}

swappedName = temp;

console.log(swappedName);

// Output
// "ELzERo"
