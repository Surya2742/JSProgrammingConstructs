const prompt = require("prompt-sync")();
console.log("To check whether it is prime or not");
const number = parseInt(prompt("Enter the number : "));
let isPrime = true

if(number == 1){
    console.log("1 is neither prime nor a composite number ");
}

for(i=2; i<=number/2; i++){
    if(number %i == 0){
        isPrime = false
    }
}
if(isPrime){
    console.log(number +" : Its' a prime number");
}
else{
    console.log( number +" : Its' not a prime number");
}