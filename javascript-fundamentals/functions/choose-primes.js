// Choose Primes

// Write a function choosePrimes(nums) that takes in an array of numbers as args. 
// The function should return a new array containing the primes from the original array. 
// A prime number is a number that is only divisible by 1 and itself. 
// Hint: consider creating a helper function to check if a number is prime!

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

let choosePrimes = function (nums) {
    let primes = [];

    for (let index = 0; index < nums.length; index++) {
        let num = nums[index];

        if (isPrime(num)) {
            primes.push(num);
        }
    }

    return primes;
};

console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]