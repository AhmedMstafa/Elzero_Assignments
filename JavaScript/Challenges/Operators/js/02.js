/* Challenge 1 */


let a = 10;
let b = 20;
let c = 80;


console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b + +c++ - a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

/*
[++a] [+] [+b++] [+] [+c++] [-] [+a++]
[++a]
-Value: 11
-Explain: ++ is  a pre increment => 1 + 10 = 11
[+]
-Explain: addition operator
[+b++]
-Value: 20
-Explain: post increment => 20 increase in the next line to 21
[+]
-Explain: addition operator
[+c++] 
-Value: 80 
-Explain: post increment => 80 increase in the next line to 81
[-]
-Explain:  Subtraction operator
[+a++]
-Value: 11
-Explain: post increment => 11 increase in the next line to 12

11 + 20 + 80 - 11 = 100

a = 12  
b = 21
c = 81
*/

/*
[++a] [+] [-b] [+] [+c++] [-] [a++] [+] [+a]
[++a]
-Value: 13
-Explain: pre increment 12 + 1 = 13
[+]
-Explain: addition operator
[-b]
-Value: -21
-Explain: unary negation 21 => -21
[+]
-Explain: addition operator
[+c++]
-Value: 81
-Explain: post increment => increase in the next line to 82
[-]
-Explain: suptraction
[a++]
-Value: 13 
-Explain: post increment => increase in the next line to 14 
[+]
-Explain: addition operator
[+a]
-Value: 14
-Explain: unary plus 

13 + -21 + 81 - 13 + 14 = 74

a = 14
b = -21
c = 82
*/

/*
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

[--c] [+] [+b] [+] [--a] [*] [+b++] [-] [+b] [*] [a] [+] [--a] [-] [+true]

[--c]
-Value: 81 
-Explain: pre decrement
[+]
-Explain: addtion operator
[+b]
-Value: 21
-Explain: unary plus
[+]
-Explain: addtion operator
[--a]
-Value: 13
-Explain: pre decrment
[*]
-Explain: multiplication operator
[+b++]
-Value: 21
-Explain: post increment => increase in the next line to 22
[-]
-Explain: suptraction
[+b]
-Value: 22
-Explain: unary plus
[*]
-Explain: multiplication operator
[a]
-Value: 13
-Explain: 
[+]
-Explain: addtion operator
[--a]
-Value: 12
-Explain: pre decrment
[-]
-Explain: suptraction
[+true]
-Value: 1
-Explain:  unary plus

81+21+273-286+12-1=100
*/


/* Challenge 2 */

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Bariable Twice

console.log(-d * e); // 2000
console.log(++e * ++g + -d + ++f); // 173
