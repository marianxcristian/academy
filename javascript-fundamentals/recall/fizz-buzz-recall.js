// Fizz Buzz Recall

// Write a function fizzBuzz(max) that accepts a number as an arg. 
// The function should return an array containing all positive numbers less than max that are divisible by either 3 or 5, but not both.

function fizzBuzz(max) {

    for (let index = 0; index < max; index++) {
        if (index % 3 === 0 && index % 5 !== 0) {
            console.log(index);
        } else if (index % 5 === 0 && index % 3 !== 0) {
            console.log(index);
        }
    }
    
}

console.log(fizzBuzz(12)); // [ 3, 5, 6, 9, 10 ]
console.log(fizzBuzz(20)); // [ 3, 5, 6, 9, 10, 12, 18 ]