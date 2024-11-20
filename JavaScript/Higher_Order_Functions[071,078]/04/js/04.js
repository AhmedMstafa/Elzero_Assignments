let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let newNums = numsAndStrings.map((e) => +e).filter((e) => !isNaN(e));

console.log(newNums);

// [-1, -10, 10, 20, -5, -3]
