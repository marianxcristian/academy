// Log Between

// Define a function logBetween(lowNum, highNum) that will print every number from lowNum to highNum, inclusive. 
// Inclusive means that the range includes lowNum and highNum.
// Hint: this function only needs to print using console.log it does not need to return.

function logBetween(lowNum, highNum) {
    for (let index = lowNum; index <= highNum; index++) {
        console.log(index);
    }
}

logBetween(14, 6); // => prints nothing
logBetween(-1, 2); // => -1 0 1 2
logBetween(4, 6);  // => 4 5 6