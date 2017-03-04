// Make a random function that takes a number of quarters
// 1 quarter = 1 play

// the player's number
var plays = Math.floor(Math.random()*100);
//console.log(plays)


function slotPlay(games) {
    // the number to match
    currentPlay =  Math.floor(Math.random()*100);

    for(var i = 0; i < games; i++) {
        // winning play
        if(currentPlay == plays) {
            games = games + getWins()
            console.log("You won " + games + "games.")
            //break;
            return games;
        }
    }
    // losing play
    console.log("Sorry, no luck. My value is: " + plays + "; Computer's value is: " + currentPlay)
}

slotPlay(20);


function getWins(min, max) {
    min = 50;
    max = 100;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//console.log(getWins());