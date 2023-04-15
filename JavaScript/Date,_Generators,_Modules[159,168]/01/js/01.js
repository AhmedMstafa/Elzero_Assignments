let dateNow = Date.now();

let birthDay = new Date("sep 20, 98");

let myBirthDay = dateNow - birthDay;

let seconds = myBirthDay / 1000;
let minutes = seconds / 60;
let hours = minutes / 60;
let days = hours / 24;
let months = days / 30;
let years = days / 365;

console.log(`${seconds} Seconds`);
console.log(`${minutes} Minutes`);
console.log(`${hours} Hours`);
console.log(`${days} Days`);
console.log(`${months} Months`);
console.log(`${years} Years`);

// Needed Output

// ("1247939400 Seconds");
// ("20798990 Minutes");
// ("346650 Hours");
// ("14444 Days");
// ("481 Months");
// ("40 Years");
