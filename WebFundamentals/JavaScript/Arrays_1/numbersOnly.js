// Create a function that copies an array, ONLY accepting the items that are numbers.
// It should return a new array

var newArray = [];
var arr = [1, "apple", -3, "orange", 0.5];

function numbersOnly() 
{
    for (var i = 0; i < arr.length; i++) 
    {
        if (typeof arr[i] === "number") 
        {
           //console.log(arr[i]);
           newArray.push(arr[i]);
        }
    }
    console.log(newArray);
}
numbersOnly();
