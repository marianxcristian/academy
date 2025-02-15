// Adjacent Sums

// Write a function adjacentSums that accepts an array of numbers as an argument. 
// The function should return a new array containing the sum of each pair of elements in the input array.

let adjacentSums = function (nums) {
    let sums = [];

    for (let i = 0; i < nums.length - 1; i++) {
        let first = nums[i];
        let next = nums[i + 1];
        sums.push(first + next);
    }

    return sums;
};

console.log(adjacentSums([3, 8, 7, 1])); // [ 11, 15, 8 ]
console.log(adjacentSums([10, 5, 4, 3, 9])); // [ 15, 9, 7, 12 ]
console.log(adjacentSums([2, -3, 3])); // [-1, 0]