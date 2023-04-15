/*
Number Challenge
*/

let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find Smallest Number in All Variables And Return Integer
console.log(Number.parseInt(Math.min(a, b, c, d)));

// Use Variable a + d One Time To Get The Needed Output
console.log(Math.pow(a, Math.round(d))); // 10000

// Get Integer "2" From d Variable With 4 Methods
console.log(Number.parseInt(d));
console.log(Number(d.toFixed()));
console.log(Math.floor(d));
console.log(Math.round(d));

// Use Variables b + d To Get This Valus
console.log((Number.parseInt(b) / Math.ceil(d)).toFixed(2)); // 66.67 => /String
console.log(Math.ceil(Number.parseInt(b) / Math.ceil(d))); // 67 => Number