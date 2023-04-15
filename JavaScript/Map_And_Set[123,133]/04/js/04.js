let theNumber = 100020003000;


console.log(...new Set(Array.from(theNumber.toString(), (e) => e == 0 ? e = ++e : e = +e)));


console.log();


// Needed Output
// 123