// Choosey Endings

// Write a function chooseyEndings that accepts an array of words and a suffix string as arguments. 
// The function should return a new array containing the words that end in the given suffix. 
// If the value passed in is not an array, return an empty array. 
// HINT: There are built in JavaScript functions that will help with determining if a strings ends a certain way. 
// Go see if you can find it on MDN!

let chooseyEndings = function (words, suffix) {
    let array = [];

    if (!Array.isArray(words)) {
        return array;
    }

    for (let i = 0; i < words.length; i++) {
        let word = words[i];

        if (word.endsWith(suffix)) {
            array.push(word);
        }
    }

    return array;
};

console.log(chooseyEndings(['family', 'hound', 'catalyst', 'fly', 'timidly', 'bond'], 'ly'));
// [ 'family', 'fly', 'timidly' ]

console.log(chooseyEndings(['family', 'hound', 'catalyst', 'fly', 'timidly', 'bond'], 'nd'));
// [ 'hound', 'bond' ]

console.log(chooseyEndings(['simplicity', 'computer', 'felicity'], 'icity'));
// [ 'simplicity', 'felicity' ]

console.log(chooseyEndings(['simplicity', 'computer', 'felicity'], 'ily'));
// [ ]

console.log(chooseyEndings(17, 'ily'));
// [ ]