
let input = document.querySelector("input");

let result = document.querySelector("div");

input.addEventListener("input", () => {
  result.innerHTML = `{${input.value} USD Dollar = {${Number((input.value * 15.6).toFixed(2))}} Egyptian Pound`
});