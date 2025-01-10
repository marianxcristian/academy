// Vowel Cipher

// Write a function vowelCipher that takes in a string and returns a new string where every vowel becomes the next vowel in the alphabet.

function vowelCipher(string) {
    let vowels = "aeiou";
    let cipher = "";

    for (let index = 0; index < string.length; index++) {
        let char = string[index];

        if (vowels.includes(char)) {
            let position = vowels.indexOf(char);
            let shift = position + 1;

            let letter = vowels[shift % vowels.length];

            cipher += letter;
        } else {
            cipher += char;
        }
    }

    return cipher;
}

console.log(vowelCipher("bootcamp")); // "buutcemp"
console.log(vowelCipher("paper cup")); // "pepir cap"