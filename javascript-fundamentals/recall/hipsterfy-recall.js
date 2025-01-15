// Hipsterfy Recall

// Write a function hipsterfy(sentence) that takes in a sentence string and returns the sentence where every word is missing its last vowel.

function removeVowel(word) {
    let vowels = "aeiou";

    for (let i = word.length - 1; i >= 0; i--) {
        let char = word[i];

        if (vowels.includes(char)) {
            let newWord = word.slice(0, i) + word.slice(i + 1);
            return newWord;
        }
    }

    return word;
}

function hipsterfy(sentence) {
    let words = sentence.split(' ');
    let string = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let newWord = removeVowel(word);
        string.push(newWord);
    }

    return string.join(' ');
}

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'