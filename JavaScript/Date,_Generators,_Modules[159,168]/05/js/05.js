let start = new Date();

for (let i = 0; i < 99999; i++) {
  console.log(i);
}

let end = new Date();

duration = end - start;

console.log(`Loop Took ${duration} Milliseconds`);

// Needed Output

// "Loop Took 1921 Milliseconds."
