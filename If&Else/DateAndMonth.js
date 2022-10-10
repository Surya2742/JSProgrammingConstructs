const prompt = require("prompt-sync")();
const start = new Date('2022-03-20');
const end = new Date('2022-06-20');
const day = prompt("Enter a date : ");
const month = prompt("Enter a month : ");
const date = new Date("2022-" + month + "-" + day);
if (date > start && date < end) {
    console.log('✅ True');
  } else {
    console.log('⛔️ False');
  }