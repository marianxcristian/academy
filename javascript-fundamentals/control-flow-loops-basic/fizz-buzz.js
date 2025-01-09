// Fizz Buzz

// Define a function fizzBuzz(max) that takes a number and prints every number from 0 to max (not inclusive) that is divisible by either 3 or 5, but not both.

function fizzBuzz(max) {
    for (let index = 0; index < max; index++) {
        if (index % 3 === 0 && index % 5 !== 0) {
            console.log(index);
        }
        if (index % 5 === 0 && index % 3 !== 0) {
            console.log(index);
        }
    }
}

fizzBuzz(20); // 3 5 6 9 10 12 18