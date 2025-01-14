// All Else Equal

// Write a function allElseEqual that takes in an array of numbers. 
// The function should return the element of the array that is equal to half of the sum of all elements of the array. 
// If there is no such element, the method should return null.

let sumElements = function (array) {
    let sum = 0;

    for (let index = 0; index < array.length; index++) {
        let number = array[index];
        sum += number;
    }

    return sum;
};

let allElseEqual = function (array) {

    for (let index = 0; index < array.length; index++) {
        let element = array[index];

        if (element === sumElements(array) / 2) {
            return element;
        }
    }

    return null;
};

console.log(allElseEqual([2, 4, 3, 10, 1])); // 10
console.log(allElseEqual([6, 3, 5, -9, 1])); // 3
console.log(allElseEqual([1, 2, 3, 4])); // null