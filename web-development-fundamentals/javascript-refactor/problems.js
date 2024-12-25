// Function 1

// Original:
// Write a function `plusFive` that takes in a number as an argument and
// returns the sum of that number and 5.

// function plusFive(num) {
//     return num + 5;
// }

// New:
// Write a function `plusTen` that takes in a number as an argument and
// returns the sum of that number and 10.

function plusTen(num) {
    return num + 10;
}

// Function 2

// Original:
// Write a function `printFives(max)` that prints out the multiples of 5 that
// are less than max.

// function printFives(max) {
//     for (let i = 0; i < max; i++) {
//         if (i % 5 === 0) {
//             console.log(i);
//         }
//     }
// }

// New:
// Write a function `returnSevens(max)` that returns an array that contains
// multiples of 7 that are less than max.

function returnSevens(max) {
    let array = [];
    for (let i = 0; i < max; i++) {
        if (i % 7 === 0) {
            array.push(i);
        }
    }
    return array;
}

// Function 3

// Original:
// Write a function named `eitherStringIncluded(sentence, word1, word2)` that
// accepts a sentence and two words as arguments. The `eitherStringIncluded`
// function should return `true` if *either* `word1` or `word2` is found in
// the sentence, and `false` if neither is found.

// function eitherStringIncluded(sentence, word1, word2) {
//     return sentence.includes(word1) || sentence.includes(word2);
// }

// New:
// Write a function named `bothStringsIncluded(sentence, word1, word2)` that
// accepts a sentence and two words as arguments. The `bothStringsIncluded`
// function should return `true` if *both* `word1` and `word2` are found in
// the sentence, and `false` if neither or only 1 is found.

function bothStringsIncluded(sentence, word1, word2) {
    return sentence.includes(word1) && sentence.includes(word2);
}

// Function 4

// Original:
// Write a function `sumArray(arr)` that takes in an array of numbers and
// returns the total sum of all the numbers.

// function sumArray(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

// New:
// Write a function `productArray(arr)` that takes in an array of numbers and
// returns the product of all the numbers. The product of an array is the number
// you get when you multiply all the numbers together.

function productArray(arr) {
    let total = 1;
    for (let i = 0; i < arr.length; i++) {
        total *= arr[i];
    }
    return total;
}

// Function 5

// Original:
// Write a function `threeOrSeven` that takes in a number and returns `true`
// if the number is divisible by either 3 or 7 and `false` otherwise.

// function threeOrSeven(num) {
//     return num % 3 === 0 || num % 7 === 0;
// }

// New:
// Write a function `fiveAndEleven` that takes in a number and returns `true`
// if the number is divisible by BOTH 5 and 11 and `false` otherwise.

function fiveAndEleven(num) {
    return num % 5 === 0 && num % 11 === 0;
}

// Function 6

// Original:
// Write a function, `countVowels(word)`, that takes in a string word and
// returns the number of vowels in the word.

// function countVowels(word) {
//     const vowels = ["a", "e", "i", "o", "u"];
//     let count = 0;
//     for (let i = 0; i < word.length; i++) {
//         if (vowels.includes(word[i])) {
//             count++;
//         }
//     }
//     return count;
// }

// New:
// Write a function, `countConsonants(word)`, that takes in a string word and
// returns the number of consonants in the word.

function countConsonants(word) {
    const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (!vowels.includes(word[i]) && word[i] !== " ") {
            count++;
        }
    }

    return count;
}

// Function 7

// Original:
// Write a function `whisper` that takes in a string and returns a "whispered"
// version of that string. Use the `.toLowerCase()` function on a string to
// see what it does!

// function whisper(str) {
//     return str.toLowerCase();
// }

// New:
// Write a function `alternatingLetters` that takes in a string and returns a
// version of that string where letters alternate uppercase and lowercase,
// starting with lowercase. Do not make exceptions for spaces within the
// string.

// Strings are immutable, so here are some tools you may find useful. The
// `.split('')` function on strings to make a copy of the string as an array.
// The `.join('')` function joins the elements in an array into a string.

function alternatingLetters(str) {
    let word = [];

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (i % 2 == 0) {
            word.push(char.toLowerCase());
        } else {
            word.push(char.toUpperCase());
        }
    }

    return word.join("");
}

module.exports = {
    plusTen,
    returnSevens,
    bothStringsIncluded,
    productArray,
    fiveAndEleven,
    countConsonants,
    alternatingLetters
}
