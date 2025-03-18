function showMsg(
  user: string = '',
  age: number | string = 0,
  country: string = ''
) {
  return `${user}${age}${country}`;
}

console.log(showMsg());
console.log(showMsg('Elzero'));
console.log(showMsg('Elzero', 40));
console.log(showMsg('Elzero', '40', 'Egypt'));
