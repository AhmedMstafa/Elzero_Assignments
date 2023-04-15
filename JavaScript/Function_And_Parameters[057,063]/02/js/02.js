function calculate(firstNum, secondNum, operation) {
  // Your Code Here
  if (typeof firstNum === "number" && typeof secondNum === "number") {
    if (operation === "add") {
      console.log(firstNum + secondNum);
    } else if (operation === "subtract") {
      console.log(firstNum - secondNum);
    } else if (operation === "multiply") {
      console.log(firstNum * secondNum);
    } else {
      console.log(firstNum + secondNum);
    }
  } else if (typeof firstNum !== "number") {
    console.log("First Number Not Found")
  } else if (typeof secondNum !== "number") {
    console.log("Second Number Not Found")
  }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600