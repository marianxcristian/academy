// Fibonacci

// The fibonacci sequence is a sequence of numbers whose first and second elements are 1. 
// To generate further elements of the sequence we take the sum of the previous two elements. 
// For example the first 6 fibonacci numbers are 1, 1, 2, 3, 5, 8. 
// Write a function fibonacci that takes in a number length and returns the fibonacci sequence up to the given length.

function fibonacci(length) {
    if (length === 0) {
        return [];
    }

    if (length === 1) {
        return [1];
    }

    let sequence = [1, 1];

    while (sequence.length < length) {
        let last = sequence[sequence.length - 1];
        let penultimate = sequence[sequence.length - 2];
        let next = penultimate + last;

        sequence.push(next);
    }

    return sequence;
}

console.log(fibonacci(0)); // []
console.log(fibonacci(1)); // [1]
console.log(fibonacci(6)); // [1, 1, 2, 3, 5, 8]
console.log(fibonacci(8)); // [1, 1, 2, 3, 5, 8, 13, 21]