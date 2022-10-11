const prompt = require('prompt-sync')();
let num = prompt("Enter a number : ");

if (num >= 1 && num <= 9) {
    console.log("unit");
}
else if (num >= 10 && num <= 99) {
    console.log("Ten");
}
else if (num >= 100 && num <= 999) {
    console.log("Hundred");
}
else if (num >= 1000 && num <= 9999) {
    console.log("Thousand");
}
else if (num >= 10000 && num <= 99999) {
    console.log("Ten thousand");
}
else if (num >= 100000 && num <= 999999) {
    console.log("Lakh");
}