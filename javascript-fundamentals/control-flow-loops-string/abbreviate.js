// Abbreviate

// Write a function abbreviate(word) that takes in a string arg. 
// The function should return a new string where all of its vowels are removed.

function abbreviate(word) {
    let vowels = "aeiou";
    let string = "";

    for (let index = 0; index < word.length; index++) {
        let letter = word[index].toLowerCase();

        if (!vowels.includes(letter)) {
            string += letter;
        }
    }

    return string;
}

console.log(abbreviate('wonderful')); // 'wndrfl'
console.log(abbreviate('mystery'));   // 'mystry'
console.log(abbreviate('Accordian')); // 'ccrdn'