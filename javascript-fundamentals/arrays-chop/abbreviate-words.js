// Abbreviate Words

// Write a function abbreviateWords(sentence) that takes in a sentence string. 
// The function should return a new sentence where words that are longer than 4 characters have their vowels removed. 
// Hint: Consider creating a helper function to remove all vowels in a string.

function removeVowels(word) {
    let vowels = "aeiou";
    let removed = [];

    for (let i = 0; i < word.length; i++) {
        let char = word[i];

        if (!vowels.includes(char)) {
            removed.push(char);
        }
    }

    return removed.join('');
}

function abbreviateWords(sentence) {
    let words = sentence.split(' ');
    let abbreviated = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];

        if (word.length > 4) {
            let newWord = removeVowels(word);
            abbreviated.push(newWord);
        } else {
            abbreviated.push(word);
        }
    }

    return abbreviated.join(' ');
}

console.log(abbreviateWords('what a wonderful place to live')); // what a wndrfl plc to live
console.log(abbreviateWords('she sends an excellent message ')); // she snds an xcllnt mssg