// Has Double Letter

// Write a function hasDoubleLetter(str) that accepts a string. 
// The function should return a boolean indicating whether the string contains two of the same character consecutively. 
// If the value passed into the function is not a string, return null.

function hasDoubleLetter(string) {
    if (typeof string !== 'string') {
        return null;
    }

    for (let index = 0; index < string.length - 1; index++) {
        let char = string[index];
        let next = string[index + 1];

        if (char === next) {
            return true;
        }
    }

    return false;
}

console.log(hasDoubleLetter('deer'));      // true
console.log(hasDoubleLetter('boot camp')); // true
console.log(hasDoubleLetter('toggle'));    // true
console.log(hasDoubleLetter('taco'));      // false
console.log(hasDoubleLetter('jumper'));    // false
console.log(hasDoubleLetter(18));          // null
console.log(hasDoubleLetter(['array']));   // null