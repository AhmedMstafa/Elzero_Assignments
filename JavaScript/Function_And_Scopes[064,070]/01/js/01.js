function getDetails(zName = "", zAge = "", zCountry = "") {
  function namePattern(zName) {
    return (
      zName.slice(0, zName.indexOf(" ")) +
      zName.substr(zName.indexOf(" "), 2).toUpperCase()
    );
  }
  function ageWithMessage(zAge) {
    zAge = zAge.split(" ");
    for (let i = 0; i < zAge.length; i++) {
      if (typeof parseInt(zAge[i]) === "number") return zAge[i];
    }
  }
  function countryTwoLetters(zCountry) {
    return zCountry.substr(0, 2).toUpperCase();
  }
  function fullDetails(zName, zAge, zCountry) {
    return `Hello ${namePattern(zName)},\
 Your Age Is ${ageWithMessage(zAge)},\
 You Live In ${countryTwoLetters(zCountry)}`;
  }
  return fullDetails(zName, zAge, zCountry); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY
