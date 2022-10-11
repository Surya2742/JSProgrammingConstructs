const prompt = require('prompt-sync')();
const number = parseInt(prompt("Enter value of n to get power of 2 : "));

for(i = 0; i <= number; i++){
    console.log("2 ^ " + i + " = " + Math.pow(2,i));
}