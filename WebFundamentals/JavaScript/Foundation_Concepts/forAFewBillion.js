// For a Few Billion

amount = 0.01;                          // day one

function howMuch() {
    for(day = 2; day < 31; day++) {   // start to double on day two; go for 30 days
        amount = amount*2;            // double the amount each day
    }
    return amount*100;
}
console.log(howMuch());
