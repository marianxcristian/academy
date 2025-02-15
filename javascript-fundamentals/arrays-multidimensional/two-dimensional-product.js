// Two Dimensional Product

// Write a function twoDimensionalProduct(array) that takes in a 2D array of numbers as an argument. 
// The function should return the total product of all numbers multiplied together.

function twoDimensionalProduct(array) {
    let product = 1;

    for (let i = 0; i < array.length; i++) {
        let nums = array[i];

        for (let j = 0; j < nums.length; j++) {
            let num = nums[j];
            product *= num;
        }
    }

    return product;
}

let arr1 = [
    [6, 4],
    [5],
    [3, 1]
];

console.log(twoDimensionalProduct(arr1)); // 360

let arr2 = [
    [11, 4],
    [2]
];

console.log(twoDimensionalProduct(arr2)); // 88