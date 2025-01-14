// Next Prime

// Write a function nextPrime that accepts a number as an argument. 
// The function should return the nearest prime number that is greater than the given number.

let isPrime = function (number) {
    if (number < 2) {
        return false;
    }

    for (let index = 2; index < number; index++) {
        if (number % index === 0) {
            return false;
        }
    }

    return true;
};

let nextPrime = function (number) {
    let index = number;

    while (true) {
        index++;

        if (isPrime(index)) {
            return index;
        }
    }
};

console.log(nextPrime(2));  // 3
console.log(nextPrime(3));  // 5
console.log(nextPrime(7));  // 11
console.log(nextPrime(8));  // 11
console.log(nextPrime(20)); // 23
console.log(nextPrime(97)); // 101