function multiply(...numbers) {
  result = 1;
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] !== "number") {
      continue
    };
    numbers[i] = Number.parseInt(numbers[i])
    result = result * numbers[i];
  }
  console.log(result);
}



multiply(10, 20, 30); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000