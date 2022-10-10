const prompt = require('prompt-sync')();
const lengthInInches = prompt("Enter length in inches :");
let result = lengthInInches / 12;
console.log(lengthInInches+ " inches in feet is : " +result+ " ft.");

const lengthInFeet = prompt("Enter length in feet :");

const breadthInFeet = prompt("Enter breadth in feet :");

let calculatedArea = lengthInFeet * breadthInFeet;
console.log("Area in square feet is : " + calculatedArea);

let calculatedAreaInAcres = calculatedArea / 43560;
console.log("Area in acres is : " + calculatedAreaInAcres);

let totalArea = 25 * calculatedAreaInAcres;
console.log("Area for 25 plots is : " + totalArea);