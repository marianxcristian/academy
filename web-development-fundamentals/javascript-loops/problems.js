// Function 1

// Return an array containing all the odd indices in the array

function oddIndices(arr) {
    let array = [];
    for (let i = 1; i < arr.length; i += 2) {
        array.push(arr[i]);
    }
    return array;
}

// Function 2

// Return an array containing all the odd indices starting from the end

function oddReverse(arr) {
    let array = [];
    for (let i = arr.length - 1; i > 0; i -= 2) {
        if (i % 2 !== 0) {
            array.push(arr[i]);
        } else {
            array.push(arr[i - 1]);
        }
    }
    return array;
}

// Function 3

// Return an array containing all indices that are powers of 2

function secondPower(arr) {
    let array = [];
    for (i = 1; i < arr.length; i *= 2) {
        array.push(arr[i]);
    }
    return array;
}

// Function 4

// Return an array containing all indices that are powers of n

function nthPower(arr, n) {
    let array = [];
    for (i = 1; i < arr.length; i *= n) {
        array.push(arr[i]);
    }
    return array;
}

// Function 5

// Return an array containing the first half of an array
// Include middle index on odd length arr

function firstHalf(arr) {
    let array = [];
    for (i = 0; i < arr.length / 2; i++) {
        array.push(arr[i]);
    }
    return array;
}

// Function 6

// Return an array containing the second half of an array
// Exclude middle index on odd length arr

function secondHalf(arr) {
    let array = [];
    for (i = arr.length - 1; i >= arr.length / 2; i--) {
        array.push(arr[i]);
    }
    return array;
}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}
