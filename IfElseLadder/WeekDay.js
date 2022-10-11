let number = Math.floor(Math.random() * 7) + 1;
console.log(number);
let day;
if (number == 1) {
    day = 'Monday';
}else if (number == 2) {
    day = 'Tuesday';
}else if (number == 3) {
    day = 'Wednesday';
}else if (number == 4) {
    day = 'Thursday';
}else if (number == 5) {
    day = 'Friday';
}else if (number == 6) {
    day ='Saturday';
}else if ( number == 7) {
    day = 'Sunday';
}
console.log('The day is :'+ day)