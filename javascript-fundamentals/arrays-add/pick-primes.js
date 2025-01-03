// Pick Primes

// Write a function pickPrimes that takes in an array of numbers and returns a new array containing only the prime numbers.

function prime(num) {
    if (num < 2) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

function pickPrimes(array) {
    let primes = [];

    for (let i = 0; i < array.length; i++) {
        let num = array[i];

        if (prime(num)) {
            primes.push(num);
        }
    }

    return primes;
}

console.log(pickPrimes([2, 3, 4, 5, 6])); // [2, 3, 5]
console.log(pickPrimes([101, 20, 103, 2017])); // [101, 103, 2017]