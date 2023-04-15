function specialMix(...data) {
  // Your Code Here
  let result = 0;
  for (let i = 0; i < data.length; i++) {
    if (typeof data[i] === "number") {
      result += data[i]
    } else if (typeof data[i] === "string") {
      data[i] = data[i].split("")
      for (let j = 0; j < data[i].length; j++) {
        data[i][j] = +data[i][j];
        result += data[i][j] || 0;
      }
    }
  }
  if (result === 0) result = "All Is Strings";
  return result;
}



console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings






