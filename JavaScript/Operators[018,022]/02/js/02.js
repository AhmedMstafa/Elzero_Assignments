let num = 3;

// Solution One
console.log(num + num); // 6

// Solution Two
console.log((typeof num).length); // 6

// Soultion Three
console.log((num - true) * num); // 6

// Soultion Four
console.log(num << true); // 6

// Solution Five
console.log((++num * --num) / (num - true)); // 6

// Solution Six
console.log(num + (typeof NaN != typeof num) + num); // 6
