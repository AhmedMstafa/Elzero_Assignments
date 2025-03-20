// Write Function Code Here
function showTypes<T1, T2 = number, T3 = boolean>(
  type1: T1 | string = 'Nothing',
  type2: T2 | string = 'Nothing',
  type3: T3 | string = 'Nothing'
): string {
  return `${type1} - ${type2} - ${type3}`;
}
// Do Not Edit Here
console.log(showTypes()); // Nothing - Nothing - Nothing
console.log(showTypes<string>('String')); // String - Nothing - Nothing
console.log(showTypes<string, number>('String', 100)); // String - 100 - Nothing
console.log(showTypes<string, number, boolean>('String', 100, true)); // String - 100 - true
