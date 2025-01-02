// My Index Of

// Write a function myIndexOf(arr, target) that takes in an array and target value as args. 
// The function should return the first index where the target is found in the array. 
// If the target is not found, it should return -1. 
// Solve this without using Array.indexOf.

function myIndexOf(arr, target) {

    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];

        if (val === target) {
            return i;
        }
    }

    return -1;
}

console.log(myIndexOf(['a', 'b', 'c', 'e'], 'c')); // 2
console.log(myIndexOf(['a', 'b', 'c', 'e'], 'e')); // 3
console.log(myIndexOf(['a', 'b', 'c', 'e'], 'z')); // -1
console.log(myIndexOf([43, -7, 11, 13, 43], 43));  // 0
console.log(myIndexOf([43, -7, 11, 13], 1));       // -1