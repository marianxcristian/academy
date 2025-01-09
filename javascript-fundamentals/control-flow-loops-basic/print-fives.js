// Print Fives

// Write a function printFives(max) that prints out the multiples of 5 that are less than max.
// Try to solve this in two ways, using a conditional (if) and without using a conditional.

// Function 1
function printFives(max) {
    for (let index = 0; index < max; index++) {
        if (index % 5 === 0) {
            console.log(index);
        }
    }
}

// Function 2
function printFives(max) {
    for (let index = 0; index < max; index += 5) {
        console.log(index);
    }
}

printFives(20); // 0 5 10 15