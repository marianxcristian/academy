// Is Prime

// Define a function isPrime(number) that returns true if number is prime. Otherwise, false. 
// A number is prime if it is only divisible by 1 and itself.

function isPrime(number) {
    if (number < 2) {
        return false;
    }

    for (let index = 2; index < number; index++) {
        if (number % index === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(2)); // => true
console.log(isPrime(10)); // => false
console.log(isPrime(11)); // => true
console.log(isPrime(9)); // => false
console.log(isPrime(2017)); // => true