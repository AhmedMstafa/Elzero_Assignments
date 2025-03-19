type custom = boolean | never;

function isHeOld(age: number | string): custom | number {
  if (typeof age === 'string') throw new Error('age must be a number');
  return age > 40;
}

// Do Not Edit Here
console.log(isHeOld('100')); // Error
console.log(isHeOld(45)); // "Yes"
console.log(isHeOld(30)); // "No"
