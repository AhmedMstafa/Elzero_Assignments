let ip = "2001:db8:3333:4444:5555:6666:7777:8888";

let regx = /\d{4}:\w{2}\d:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}/gi;

console.log(ip.match(regx));
