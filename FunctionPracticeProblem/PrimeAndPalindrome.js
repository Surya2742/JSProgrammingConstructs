const prompt = require('prompt-sync')();

let num = parseInt(prompt("Enter the number : "));
let rem = 0;
let rev = 0;

checkPrime(num);
console.log("Palindrome of Entered Number is : " + checkPalindrome(num));
checkPrime(rev);

function checkPrime(num) {
    let flag = 0;
    for (i = 2; i <= num / 2; i++) {
        ans = num % i;
        if (ans == 0) {
            flag = 1;
        }
    }
    if (flag == 1) {
        console.log(num + " is not prime.")
    }
    else {
        console.log(num + " is prime.")
    }
}

function checkPalindrome(num) {
    while (num > 0) {
        rem = num % 10;
        rev = rev * 10 + rem;
        num = Math.floor(num / 10);
    }
    return rev;
}