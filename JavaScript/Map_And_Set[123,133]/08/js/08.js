let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log(n1.reduce((e, c) => e + c) * new Set(n2).size);