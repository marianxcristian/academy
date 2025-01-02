// Three Increasing

// Write a function threeIncreasing that accepts an array of numbers as an argument. 
// The function should return a boolean indicating whether or not the array contains three consecutive numbers in consecutive increasing order, like 7, 8, 9.

function threeIncreasing(array) {

    for (let i = 0; i < array.length; i++) {
        let first = array[i];
        let second = array[i + 1];
        let third = array[i + 2];

        if (first + 1 === second && second + 1 === third) {
            return true;
        }
    }

    return false;
}

console.log(threeIncreasing([3, 2, 11, 12, 13, 2, 4])); // true
console.log(threeIncreasing([2, 7, 8, 9]));             // true
console.log(threeIncreasing([7, 2, 4, 5, 2, 1, 6]));    // false
console.log(threeIncreasing([1, 2, 4, 5, 2, 7, 8]));    // false