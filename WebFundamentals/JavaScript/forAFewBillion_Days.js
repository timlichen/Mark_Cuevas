// For a Few Billion

// How many days would it take tke servant to make $10k?

var amount = 0.01;

function howManyDays(amount, day) {
    for(day = 2; day < 31; day++) {
        amount = amount*2;
        if(amount >= 10000) {
            break;
        }
        return day;
    }
}

howManyDays(.01);