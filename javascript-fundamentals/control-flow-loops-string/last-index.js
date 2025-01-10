// Last Index

// Write a function lastIndex that takes in a string and a character. 
// The function should return the last index where the character can be found in the string.

function lastIndex(str, char) {
    for (let index = str.length - 1; index >= 0; index--) {
        if (str[index] === char) {
            return index;
        }
    }
}

console.log(lastIndex("abca", "a"));        // 3
console.log(lastIndex("mississipi", "i"));  // 9
console.log(lastIndex("octagon", "o"));     // 5
console.log(lastIndex("programming", "m")); // 7