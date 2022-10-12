const prompt = require('prompt-sync')();
console.log("Take any number in your mind between 0-100.");
let yes = true;
let temp = 50;
let calculate = 50;
while (yes) {
    temp = temp/2;
    let choice = parseInt(prompt("1.Less than " + calculate + ", 2.Greater than " + calculate + ", 3.It is the number, 4. Number not found."))
    switch (choice) {
        case 1: {
            if(calculate == 1 && choice == 1) {
                console.log("The assumed number is : 0");
                yes = false;
                break;
            }
            calculate = Math.round(calculate - (temp));
            break;
        }
        case 2: {
            calculate = Math.round(calculate + (temp));
            if(calculate == 100 && choice == 2) {
                console.log("The assumed number is : 100");
                yes = false;
                break;
            }
            break;
        }
        case 3: {
            console.log("The assumed number is : " + calculate);
            yes = false;
            break;
        }
    }
}
