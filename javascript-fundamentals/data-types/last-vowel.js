// Last Vowel

// Write a function lastVowel(str) that takes in a string and returns the last vowel that appears sequentially in the string. 
// Note that the string may contain capitalization.
// Hint: You may find the String.toLowerCase() or String.toUpperCase() methods useful.

function lastVowel(string) {
    let vowels = "aeiou";

    for (let index = string.length - 1; index >= 0; index--) {
        let char = string[index];

        if (vowels.includes(char.toLowerCase())) {
            return char;
        }
    }

    return null;
}

console.log(lastVowel('battery')); // 'e'
console.log(lastVowel('TUNNEL')); // 'E'
console.log(lastVowel('dog')); // 'o'
console.log(lastVowel('conventional')); // 'a'
console.log(lastVowel('rhythm')); // null