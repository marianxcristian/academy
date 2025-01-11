// Remove E Words

// Write a function removeEWords(sentence) that accepts a sentence string as an arg. 
// The function should return a new string, containing only the words that don't have the letter "e" in them.

function removeEWords(sentence) {
    let array = sentence.split(' ');
    let string = [];

    for (let i = 0; i < array.length; i++) {
        let word = array[i];

        if (!word.toLowerCase().includes("e")) {
            string.push(word);
        }
    }

    return string.join(' ');
}

console.log(removeEWords('What time is it everyone?')); // 'What is it'
console.log(removeEWords('Enter the building')); // 'building'