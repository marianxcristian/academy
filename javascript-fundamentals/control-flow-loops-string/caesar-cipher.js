// Caesar Cipher

// Write a method caesarCipher that takes in a string and a number. 
// The function should return a new string where every character of the original is shifted num characters in the alphabet.

function caesarCipher(string, num) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let cipher = "";

    for (let index = 0; index < string.length; index++) {
        let char = string[index].toLowerCase();
        let position = alphabet.indexOf(char);
        let shift = position + num;

        let letter = alphabet[shift % alphabet.length];

        cipher += letter;
    }

    return cipher;
}

console.log(caesarCipher("apple", 1)); // "bqqmf"
console.log(caesarCipher("bootcamp", 2)); // "dqqvecor"
console.log(caesarCipher("zebra", 4)); // "difve"