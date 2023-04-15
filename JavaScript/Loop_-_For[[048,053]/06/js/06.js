let start = 0;
let swappedName = "elZerO";
let temp = [];

for (i = start; i < swappedName.length; i++) {
  if (swappedName[i] === swappedName[i].toUpperCase()) {
    temp += swappedName[i].toLocaleLowerCase();
  } else if (swappedName[i] === swappedName[i].toLocaleLowerCase()) {
    temp += swappedName[i].toUpperCase();
  }

}
swappedName = temp


console.log(swappedName)



// Output
// "ELzERo"