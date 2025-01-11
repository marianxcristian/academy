// Avg Val

// Write a function avgVal(arr) that accepts an array as an arg. 
// The function should return the average of all values in the array. 
// If the array is empty, it should return null.

function avgVal(array) {
    if (array.length === 0) {
        return null;
    }

    let sum = 0;
    let avg = array.length;

    for (let index = 0; index < array.length; index++) {
        let num = array[index];
        sum += num;
    }

    return sum / avg;
}

console.log(avgVal([5, 10])); // 7.5
console.log(avgVal([3, 7, 2, 1, 2])); // 3
console.log(avgVal([])); // null