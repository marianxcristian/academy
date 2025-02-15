// Snake to Camel

// Write a function snakeToCamel that takes in a snake_cased string and returns a PascalCased version of the string. 
// Snake_case is where each word is separated with underscores (_). 
// PascalCase is a string where the first char of each word is capital, all other chars lowercase.

let snakeToCamel = function (sentence) {
    let words = sentence.split('_');
    let camel = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let initial = word[0].toUpperCase();
        let letters = word.slice(1).toLowerCase();

        let newWord = initial + letters;

        camel.push(newWord);
    }

    return camel.join('');
};

console.log(snakeToCamel('snakes_go_hiss'));      // 'SnakesGoHiss'
console.log(snakeToCamel('say_hello_world'));     // 'SayHelloWorld'
console.log(snakeToCamel('app_academy_is_cool')); // 'AppAcademyIsCool'
console.log(snakeToCamel('APp_ACADEMY_iS_cOol')); // 'AppAcademyIsCool'