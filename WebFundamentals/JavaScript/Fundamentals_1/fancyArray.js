// Fancy Array

// Bonus: User can pass in symbol


arr = ["James", "Jill", "Jane", "Jack"]

function printFancyArray(symbol) {
    element = 0;
    for(var i = 0; i < arr.length; i++) {
        console.log(element + symbol + arr[i])
        element += 1;
    }
}
printFancyArray(" :: ");