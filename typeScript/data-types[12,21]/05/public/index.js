"use strict";
function isHeOld(age) {
    if (typeof age === 'string')
        throw new Error('age must be a number');
    return age > 40;
}
// Do Not Edit Here
console.log(isHeOld('100')); // Error
console.log(isHeOld(45)); // "Yes"
console.log(isHeOld(30)); // "No"
