// Most Vowels

// Write a function mostVowels that takes in a sentence string and returns the word of the sentence that contains the most vowels.

let numVowels = function (word) {
    let vowels = "aeiou";
    let count = 0;

    for (let i = 0; i < word.length; i++) {
        let letter = word[i];

        if (vowels.includes(letter)) {
            count++;
        }
    }

    return count;
};

let mostVowels = function (sentence) {
    let words = sentence.split(" ");
    let largest = 0;

    for (let index = 0; index < words.length; index++) {
        let word = words[index];

        if (numVowels(word) > largest) {
            largest = index;
        }
    }

    return words[largest];
};

console.log(mostVowels("what a wonderful life")); // "wonderful"