const prompt = require('prompt-sync')();
let a = parseInt(prompt("Enter value of a : "));
let b = parseInt(prompt("Enter value of b : "));
let c = parseInt(prompt("Enter value of c : "));
let arithmeticOne = (a + b * c);
let arithmeticTwo = (c + a / b);
let arithmeticThree = (a % b + c);
let arithmeticFour = (a * b + c);

console.log("1st Arithmetic operation is a + b * c : " + arithmeticOne);
console.log("2nd Arithmetic operation is c + a / b : " + arithmeticTwo);
console.log("3rd Arithmetic operation is a % b + c : " + arithmeticThree);
console.log("4th Arithmetic operation is a * b + c : " + arithmeticFour);
console.log("The Maximum value from 4 Arithmetic Operation : " + Math.max(arithmeticOne, arithmeticTwo, arithmeticThree, arithmeticFour));