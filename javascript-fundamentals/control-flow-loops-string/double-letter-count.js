// Double Letter Count

// Write a function doubleLetterCount that takes in a string and returns the number of times that the same letter repeats twice in a row.

function doubleLetterCount(string) {
    let times = 0;

    for (let index = 0; index < string.length; index++) {
        let char = string[index];
        let same = string[index + 1];

        if (char === same) {
            times++;
        }
    }

    return times;
}

console.log(doubleLetterCount("bootcamp")); // 1
console.log(doubleLetterCount("the jeep rolled down the hill")); // 3