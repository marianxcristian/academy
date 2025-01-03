// Even Numbers

// Write a function evenNumbers(max) that takes in a number as an arg. 
// The function should return an array containing all positive, even numbers that are less than max.
// Define this function using function expression syntax.

let evenNumbers = function (max) {
    let evens = [];

    for (let i = 1; i < max; i++) {
        let num = i;

        if (num % 2 === 0) {
            evens.push(num);
        }
    }

    return evens;
}

console.log(evenNumbers(7)); // [ 2, 4, 6 ]
console.log(evenNumbers(12)); // [ 2, 4, 6, 8, 10 ]
console.log(evenNumbers(15)); // [ 2, 4, 6, 8, 10, 12, 14 ]