let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let st = mix.map(function (e) {
  return isNaN(parseInt(e)) ? e : "";
}).reduce(function (e, c) {
  return `${e}${c}`
});

console.log(st);
// Elzero