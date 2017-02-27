// Make a random function that takes a number of quarters
// 1 quarter = 1 play


var games = 10;

var plays = Math.floor(Math.random(plays)*100);
//console.log(plays)

function slotPlay(games) {
    for(var i = 0; i < games; i++) {
        // the number to match
        currentPlay =  Math.floor(Math.random(plays)*100);

        if(currentPlay == plays) {
            currentPlay = currentPlay + 50                  // test it with 50
            //break;
            return games;
        }
        //return games;
    }
    console.log("Sorry, no luck.")
}

slotPlay(20);