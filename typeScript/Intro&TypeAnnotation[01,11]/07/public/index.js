"use strict";
function showMsg(user = '', age = 0, country = '') {
    return `${user}${age}${country}`;
}
console.log(showMsg());
console.log(showMsg('Elzero'));
console.log(showMsg('Elzero', 40));
console.log(showMsg('Elzero', '40', 'Egypt'));
