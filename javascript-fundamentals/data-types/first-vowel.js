// First Vowel

// Write a function firstVowel(str) that takes in a string and returns the first vowel that appears sequentially in the string. 
// If the string does not contain a vowel, return null.

let firstVowel = function (string) {
    let vowels = "aeiou";

    for (let index = 0; index < string.length; index++) {
        let char = string[index];

        if (vowels.includes(char)) {
            return char;
        }
    }

    return null;
};

console.log(firstVowel('battery')); // 'a'
console.log(firstVowel('tunnel')); // 'u'
console.log(firstVowel('dog')); // 'o'
console.log(firstVowel('conventional')); // 'o'
console.log(firstVowel('rhythm')); // null
