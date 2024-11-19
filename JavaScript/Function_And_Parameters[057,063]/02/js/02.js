function calculate(firstNum, secondNum, operation) {
  if (typeof firstNum === "undefined") {
    console.log("First Number Not Found");
    return;
  }

  if (typeof secondNum === "undefined") {
    console.log("Second Number Not Found");
    return;
  }

  if (operation === "subtract") {
    console.log(firstNum - secondNum);
    return;
  }

  if (operation === "multiply") {
    console.log(firstNum * secondNum);
    return;
  }

  console.log(firstNum + secondNum);
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600
