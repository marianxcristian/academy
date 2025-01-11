// Reverb

// Write a function reverb that accepts a word as an argument. 
// The function should return a new word where all letters that come after the last vowel (including the vowel itself) are repeated at the end of the word. 
// If the value passed in is not a string, say someone passes in a number as an argument, then return null.

let reverb = function (word) {
    if (typeof word !== 'string') {
        return null;
    }

    let vowels = "aeiou";

    for (let index = word.length - 1; index >= 0; index--) {
        let letter = word[index].toLowerCase();

        if (vowels.includes(letter)) {
            let section = word.slice(index);
            return word + section;
        }
    }

    return word;
};


console.log(reverb('running')); // runninging
console.log(reverb('FAMILY'));  // FAMILYILY
console.log(reverb('trash'));   // trashash
console.log(reverb('DISH'));    // DISHISH
console.log(reverb(197393));    // null