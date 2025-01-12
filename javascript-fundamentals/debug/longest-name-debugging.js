// Longest Name Debugging

// The function longestName() takes an array of names and returns the longest. 
// If there's a tie, it returns the first name of the longest length. 
// However, this implementation is full of bugs! 
// Use your debugging skills to find and fix those bugs.

function longestName(names) {
    let currentLongest = names[0];

    for (let i = 1; i < names.length; i++) {
        if (names[i].length > currentLongest.length) {
            currentLongest = names[i];
            // debug: console.log("index " + i + " : " + currentLongest)
        }

    }

    return currentLongest;
}

testNames = ["James", "Patricia", "Michael", "Elizabeth", "Christopher",
             "Sarah", "Margaret", "Kenneth", "Stephanie", "Jonathan",
             "Jeremy", "Samantha", "Alexander", "Catherine", "Benjamin"]

console.log(longestName(testNames)); // "Christopher"