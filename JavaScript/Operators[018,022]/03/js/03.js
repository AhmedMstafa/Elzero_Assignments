let num = "10";

// Solution One
console.log(+num + +num); // 20

// Solution Two
console.log(num.toString().length * num); // 20

// Solution Three
console.log(Number(num) + Number(num)); // 20

// Solution Four
console.log((true + true) * num); // 20