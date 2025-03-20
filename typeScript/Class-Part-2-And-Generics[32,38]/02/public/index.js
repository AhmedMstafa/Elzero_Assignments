"use strict";
// Write Function Code Here
function showTypes(type1 = 'Nothing', type2 = 'Nothing', type3 = 'Nothing') {
    return `${type1} - ${type2} - ${type3}`;
}
// Do Not Edit Here
console.log(showTypes()); // Nothing - Nothing - Nothing
console.log(showTypes('String')); // String - Nothing - Nothing
console.log(showTypes('String', 100)); // String - 100 - Nothing
console.log(showTypes('String', 100, true)); // String - 100 - true
