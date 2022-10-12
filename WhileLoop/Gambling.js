let cash = 100;
let goal = 200;
let betCount = 0;
let winCount = 0;
while ( cash > 0 && cash < goal) {
    betCount += 1;
    let toss = Math.floor ( Math.random() * 2 );
    if (toss == 0) {
        winCount += 1;
        cash += 1; 
    }
    if(toss == 1) {
        cash -= 1; 
    }
}
console.log("Number of Bets made : " + betCount);
console.log("Number of win : " + winCount);

if(cash == goal) {
    console.log("Won the game and reached the goal : " + cash)
}
if(cash == 0) {
    console.log("Lost all the Money.")
}