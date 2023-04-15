let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

for (i = letter.indexOf("a"); i < friends.length; i++) {
  if (friends[i][letter.indexOf("a")] === letter.toUpperCase()) {
    continue;
  }
  console.log(friends[i])
}


// Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"