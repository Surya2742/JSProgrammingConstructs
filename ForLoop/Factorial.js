const prompt = require('prompt-sync')();

const number = prompt('Enter a number: ');
let factor = 1;
process.stdout.write("Factorial of " + number + "! is = 1 * ");
for ( i = 2; i <= number; i++ ) {
    factor = factor * i;
    process.stdout.write(i + " * ");
}
console.log(" = " + factor);