let p = window.prompt("Print Number From - To", "Example: 5-20");

let arr = [];
for (let i = 0; i < p.length; i++) {
  if (!isNaN(parseInt(p[i])) || p[i] === "-") {
    arr[arr.length] = p[i]
  }
}
arr = arr.join("").split("-")


for (let i = +arr[0]; i <= +arr[arr.length - 1]; i++) {

  console.log(i)
}


// p = [p.slice(0, p.indexOf("-")), p.slice(p.indexOf("-") + 1)];
// console.log(p)












