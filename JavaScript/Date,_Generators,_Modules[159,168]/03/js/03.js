// Needed Output

let date = new Date();
date.setDate(0);
console.log(date);

let month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

console.log(
  `Previous Month Is ${
    month[date.getMonth()]
  } And Last Day Is ${date.getDate()}`
);

// "Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)";
// "Previous Month Is April And Last Day Is 30";
