const prompt = require('prompt-sync')();
const number = parseInt(prompt("Enter the value of n : "));
let sum = 0;
console.log("Harmonic Series is : ")
for(i = 1; i <= number; i++){
    sum += 1 / i;
    process.stdout.write(1/i + " + ");
}
console.log("");
for(i = 1; i <= number; i++){
    process.stdout.write("1/" + i + " + ");
}
console.log("\nHarmonic value for the entered value is : " + sum);