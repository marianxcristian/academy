// Has Three Vowels

// Write a function hasThreeVowels that accepts a string as an argument. 
// The function should return a boolean indicating whether or not the string contains at least three different vowels.

function hasThreeVowels(string) {
    let vowels = "aeiou";
    let unique = "";
    let number = 0;

    for (let index = 0; index < string.length; index++) {
        let char = string[index];

        if (vowels.includes(char) && !unique.includes(char)) {
            unique += char;
            number += 1;
        }
    }

    return number >= 3;
}

console.log(hasThreeVowels('delicious'));     //  true
console.log(hasThreeVowels('bootcamp prep')); //  true
console.log(hasThreeVowels('bootcamp'));      //  false
console.log(hasThreeVowels('dog'));           //  false
console.log(hasThreeVowels('go home'));       //  false