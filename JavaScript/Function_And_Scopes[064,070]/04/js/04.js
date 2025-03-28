function specialMix(...data) {
  let result = 0;
  let stringCounter = 0;
  for (let i = 0; i < data.length; i++) {
    data[i] = parseInt(data[i]);
    if (!isNaN(data[i])) result += data[i];

    if (isNaN(data[i])) stringCounter++;
  }
  return stringCounter === data.length ? "All Is Strings" : result;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
