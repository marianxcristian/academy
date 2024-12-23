// Function 1

// Returns the passed in number argument divided by three.

function divideByThree(num) {
    return num / 3;
};

// Function 2

// Returns the average of two numbers, num1 and num2.

function averageOfTwo(num1, num2) {
    let sum = num1 + num2;
    let avg = sum / 2;
    return avg;
};

// Function 3

// Takes in four numbers. The function should return the average of all of the numbers. 

function averageOfFour(num1, num2, num3, num4) {
    let sum = num1 + num2 + num3 + num4;
    let avg = sum / 4;
    return avg;
};

// Function 4

// Takes an array of numbers and returns a new array where every element of the original array is multiplied by 2.

function doubler(nums) {
    let array = [];

    for (let index = 0; index < nums.length; index++) {
        array.push(nums[index] * 2);
    }

    return array;
};

// Function 5

// Takes in two arrays of numbers and returns the two arrays combined into a single array. 
// Hint: Use the `Array.concat` method but be aware that calling this method won't permanently change, also known as mutate, either array.

function combineArrays(arr1, arr2) {
    let arr3 = arr1.concat(arr2);
    return arr3;
};

// Function 6

// Takes in both a word and an array of words as arguments and returns a boolean that returns true if that string is located inside of the array, or false if it does not. 
// Use `Array.indexOf`.

function wordWithinArray(word, arr) {
    return arr.indexOf(word) !== -1;
};

// Function 7

// Takes in a string and returns that string "echo-ized". E.g.
// echo("Mom!"); // => returns "MOM! ... Mom! ... mom!"
// echo("hey"); // => returns "HEY ... hey ... hey"
// echo("JUMp"); // => returns "JUMP ... JUMp ... jump"

function echo(str) {
    let upper = str.toUpperCase();
    let lower = str.toLowerCase();
    let msg = upper + " ... " + str + " ... " + lower;
    return msg;
};

// Function 8

// Takes a number, max and returns an array that contains every number from 0 to max (not inclusive) that is divisible by either 3 or 5, but not both.

function fizzBuzz(max) {
    let array = [];

    for (let index = 0; index < max; index++) {
        if (index % 3 === 0 && index % 5 !== 0) {
            array.push(index);
        } else if (index % 5 === 0 && index % 3 !== 0) {
            array.push(index);
        }
    }

    return array;
};

// Function 9

// Takes in a string name and returns a string saying "Hello, " to that name.

function hello(name) {
    return "Hello, " + name;
};

// Function 10

// Takes in a string name and returns a string saying "Bye, " to that name.

function goodbye(name) {
    return "Bye, " + name;
};

// Function 11

// Takes in a number, num, and returns `true` if a number is equal to 5 and `false` if it is not.

function isFive(num) {
    return num === 5;
};

// Function 12

// Takes in a number and returns `true` if the number is odd and returns `false` otherwise. 
// Try writing this with and without `if` statements

function isOdd(num) {
    return num % 2 !== 0;
};

// Function 13

// Takes in two strings, `searchString` and `subString`. 
// Should return `true` if `subString` is a part of the`searchString`, regardless of upper or lower case, and `false` if otherwise.

function isSubString(searchString, subString) {
    let lowSearchString = searchString.toLowerCase();
    let lowSubString = subString.toLowerCase();

    return lowSearchString.indexOf(lowSubString) !== -1;
};

// Function 14

// Takes in a word and returns the number of a's within that word. Counts both lowercase (a) and uppercase (A). 
// Your job is to translate the following function to use a `for` loop instead of the `while` loop it is currently using.

function aCounter(word) {

    /*
    let index = 0;
    let count = 0;
    while (index < word.length) {
        let char = word[index];
        if (char === "a" || char === "A") {
        count += 1;
        }
        index++;
    }
    return count;
    */

    let count = 0;

    for (index = 0; index <= word.length; index++) {
        let char = word[index];
        if (char === "a" || char === "A") {
            count += 1;
        }
    }

    return count;
};

module.exports = {
    divideByThree,
    averageOfTwo,
    averageOfFour,
    doubler,
    combineArrays,
    wordWithinArray,
    echo,
    fizzBuzz,
    hello,
    goodbye,
    isFive,
    isOdd,
    isSubString,
    aCounter
}
