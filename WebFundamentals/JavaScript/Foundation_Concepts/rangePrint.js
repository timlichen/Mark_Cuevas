// Create a function that can take a start point, end point, and skip amount, 
// to print all numbers in a range

function printRange(start, end, skip) {
    // handles missing skip parameter
    if(skip === undefined) {
        skip = 1;
    }
    // works for negative start value
    while (start < end) {
        console.log(start);
        start = start + skip;
    }
}

printRange(-2, 10);