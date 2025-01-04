// Consonant Cancel

// Write a function consonantCancel that takes in a sentence and returns a new sentence where every word begins with it's first vowel.

function removeConsonant(word) {
    let vowels = 'aeiou'

    for (let i = 0; i < word.length; i++) {
        let character = word[i];

        if (vowels.includes(character)) {
            return word.slice(i);
        }
    }

    return word;
}

function consonantCancel(sentence) {
    let words = sentence.split(' ');
    let string = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let newWord = removeConsonant(word);
        string.push(newWord);
    }

    return string.join(' ');
}

console.log(consonantCancel("down the rabbit hole")); // "own e abbit ole"
console.log(consonantCancel("writing code is challenging")); // "iting ode is allenging"