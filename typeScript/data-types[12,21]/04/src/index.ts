function yesOrNo(val: number | string): boolean | never {
  if (typeof val === 'string') throw new Error('val must be a number');
  return val > 10;
}

// Do Not Edit Here
console.log(yesOrNo('100')); // Error
console.log(yesOrNo(30)); // True
console.log(yesOrNo(8)); // False
