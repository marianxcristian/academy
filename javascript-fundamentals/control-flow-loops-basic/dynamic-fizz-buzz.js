// Dynamic Fizz Buzz

// Write a function dynamicFizzBuzz that accepts three arguments (max, num1, and num2). 
// The function should return an array containing positive numbers less than max that are divisible by num1 or num2, but not both.

function dynamicFizzBuzz(max, num1, num2) {
    let array = [];

    for (let index = 0; index < max; index++) {
        if (index % num1 === 0 && index % num2 !== 0) {
            array.push(index);
        }
        if (index % num1 !== 0 && index % num2 === 0) {
            array.push(index);
        }
    }

    return array;
}

console.log(dynamicFizzBuzz(20, 3, 5)); // [ 3, 5, 6, 9, 10, 12, 18 ]
console.log(dynamicFizzBuzz(24, 4, 6)); // [ 4, 6, 8, 16, 18, 20 ]