/* If You Don't Mind, Can I Have The Time? */

// Create a program that will tell the time.

/*  Challenge: 
    If minutes less than 30, "just after" the hour
    If more than 30 minues, "almost" the hour
    AM = "in the morning"
    PM = "in the evening"
*/

function theTime(HOUR, MINUTE, PERIOD) {
    if(MINUTE > 30) {
        HOUR += 1;
        console.log("almost " + HOUR + " " + PERIOD);
    } 
    else if (MINUTE < 30) {
        console.log("just after " + HOUR + " " + PERIOD);
    }
    else {
        console.log(HOUR + ":" + MINUTE + " " + PERIOD);
    }
}
theTime(7, 15, "AM");