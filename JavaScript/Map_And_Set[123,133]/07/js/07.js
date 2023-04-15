let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
// Needed Output
// ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']

// let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
// Needed Output
// ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']

// let chars = ["Z", "Y", "A", "D", "E", 10, 1];
// Needed Output
// ["Z", "Y", "Z", "Y", "A", "D", "E"]

// let chars = ["A", "B", "C", "D", "E", 10, 15, 6];

// let chars = [10, 15, 6, "A", "B", "C", "D", "E"];

chars.sort()

let counter = {
  start: 0,
  end: -1,
};


chars.some(function (e) {
  this.end += 1;
  return typeof e === "string"
}, counter)

console.log(counter)

chars.copyWithin(counter.start, counter.end)

console.log(chars)
