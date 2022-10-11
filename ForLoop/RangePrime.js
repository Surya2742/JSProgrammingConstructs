const prompt = require('prompt-sync')();

const lowerLimit = parseInt(prompt("Enter lower Range : "));
const higherLimit = parseInt(prompt("Enter higher Range : "));

console.log("Prime numbers between entered range are: ")

if (lowerLimit>= 0 && lowerLimit< higherLimit) {
    for(let i = lowerLimit; i <= higherLimit; i++) {
        let isPrime = 1;


    // looping through 2 to user input number
    for (let j = 2; j <= i/2; j++) {
        if (i % j == 0) {
            isPrime = 0;
            break;
        }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && isPrime == 1) {
        console.log(i);
    }
    }
}