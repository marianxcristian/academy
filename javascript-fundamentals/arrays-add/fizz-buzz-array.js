// Fizz Buzz Array

// Write a function fizzBuzz(max) that accepts a number as an arg. 
// The function should return an array containing all positive numbers less than max that are divisible by either 3 or 5, but not both.

let fizzBuzz = function (max) {
    let array = [];

    for (let i = 0; i < max; i++) {
        let num = i;

        if (num % 3 === 0 && num % 5 !== 0) {
            array.push(num);
        } else if (num % 3 !== 0 && num % 5 === 0) {
            array.push(num);
        }
    }

    return array;
};

console.log(fizzBuzz(12)); // [ 3, 5, 6, 9, 10 ]
console.log(fizzBuzz(20)); // [ 3, 5, 6, 9, 10, 12, 18 ]