const prompt = require('prompt-sync')();
let num = parseInt(prompt("Enter a number : "));

switch (true) {
    case (num > 0 && num <= 9): {
        console.log("unit");
        break;
    }
    case (num >= 10 && num <= 99): {
        console.log("Ten");
        break;
    }
    case (num >= 100 && num <= 999): {
        console.log("Hundred");
        break;
    }
    case (num >= 1000 && num <= 9999): {
        console.log("Thousand");
        break;
    }
    case (num >= 10000 && num <= 99999): {
        console.log("Ten thousand");
        break;
    }
    case (num >= 100000 && num <= 999999): {
        console.log("Lakh");
        break;
    }
    default : {
        console.log("Entered Wrong Input.")
        break;
    }
}