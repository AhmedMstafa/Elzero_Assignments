let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

// Output
// ['Os10O', 'OsO', 'Os100O']

let regx = /Os\d*O/g;

console.log(specialNames.match(regx));
