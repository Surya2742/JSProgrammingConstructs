const prompt = require('prompt-sync')({ sigint: true });
const number = parseInt(prompt(`Enter 1. Feet To Inch 2. Feet To Meter 3. Inch To Feet 4. Meter to Feet : `));

if (number <= 4 && number >= 1) {
    const digit = parseInt(prompt("Enter the length for conversion : "));

    switch (number) {
        case 1:
            let feetToInch = digit * 12;
            console.log("Feet to Inch : " + feetToInch);
            break;
        case 2:
            let feetToMeter = digit / 3.281;
            console.log("Feet to Meter : " + feetToMeter);
            break;
        case 3:
            let inchToFeet = digit / 12;
            console.log("Inch to Feet : " + inchToFeet);
            break;
        case 4:
            let meterToFeet = digit * 3.281;
            console.log("Meter to Feet : " + meterToFeet);
            break
        default:
            console.log("You have entered the wrong options!!!");
            break;
    }
}