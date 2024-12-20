// Vowel Counter

// Write a function, countVowels(word), that takes in a string word and returns the number of vowels in the word.
// Vowels are the letters "a", "e", "i", "o", "u".

function countVowels(word) {
    let vowels = ["a", "e", "i", "o", "u"];
    let count = 0;

    for (let index = 0; index < word.length; index++) {
        let letter = word[index];

        for (let index = 0; index < vowels.length; index++) {
            let vowel = vowels[index];

            if (letter === vowel) {
                count++;
            }
        }
    }

    return count;
}

console.log(countVowels("bootcamp")); // => 3
console.log(countVowels("apple"));    // => 2
console.log(countVowels("pizza"));    // => 2