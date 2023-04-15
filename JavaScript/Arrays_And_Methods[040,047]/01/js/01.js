let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;



let myFriends1 = myFriends.length = num;
// Method 1
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];


let myFriends2 = myFriends.slice(num.length, num);
// Method 2
console.log(myFriends2); // ["Ahmed", "Elham", "Osama"];