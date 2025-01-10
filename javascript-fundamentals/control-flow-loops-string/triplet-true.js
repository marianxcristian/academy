// Triplet True

// Write a function tripletTrue that accepts a string as an argument. 
// The function should return a boolean indicating whether or not the the string contains three of the same character consecutively.

function tripletTrue(str) {

    for (let i = 0; i < str.length; i++) {
        let char1 = str[i];
        let char2 = str[i + 1];
        let char3 = str[i + 2];

        if (char1 === char2 && char2 === char3) {
            return true;
        }
    }

    return false;
}

console.log(tripletTrue('caaabb'));      // true
console.log(tripletTrue('terrrrrible')); // true
console.log(tripletTrue('runninggg'));   // true
console.log(tripletTrue('bootcamp'));    // false
console.log(tripletTrue('e'));           // false