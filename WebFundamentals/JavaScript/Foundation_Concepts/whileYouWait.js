// Create a birthday countdown

// If it's > 30 days, print a sad message
// If it's < 30 days, print an exciting message
// < 5 days, SCREAM IT!
// On your birthday, have a party

var daysUntilMyBirthday = 29;

function whileYouWait(daysUntilMyBirthday) {
    // > 30 days
    if(daysUntilMyBirthday > 30) {
        console.log("My birthday is soooo far away.  :(")
    }
    // less than 30 days and greater than 5 days
    while (daysUntilMyBirthday < 30  && daysUntilMyBirthday >= 5) {
        console.log(daysUntilMyBirthday + " days until my birthday")
        daysUntilMyBirthday--
    }
    while (daysUntilMyBirthday < 5 && daysUntilMyBirthday > 0) {
        console.log(daysUntilMyBirthday + " DAYS UNTIL MY BIRTHDAY!");
        daysUntilMyBirthday--
    } 
    if (daysUntilMyBirthday === 0) {
        console.log("IT'S MY BIRTHDAY!!!!");
    }
}
whileYouWait(daysUntilMyBirthday);
