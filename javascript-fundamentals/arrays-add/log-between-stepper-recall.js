// Log Between Stepper Recall

// Write a function logBetweenStepper(min, max, step) that takes in 3 numbers as parameters. 
// The function should print out numbers between min and max at step intervals. See the following examples.
// Hint: this function only needs to print using console.log it does not need to return.

function logBetweenStepper(min, max, step) {
    for (let i = min; i <= max; i += step) {
        let num = i;
        console.log(num);
    }
}

logBetweenStepper(5, 9, 1); // 5 6 7 8 9
logBetweenStepper(-10, 15, 5); // -10 -5 0 5 10 15