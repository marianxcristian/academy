// More Dot Less Dash

// Write a function moreDotLessDash that accepts a string as an argument. 
// The function should return a boolean indicating whether or not the string contains more dots (.) than dashes (-).

function moreDotLessDash(string) {
    let dot = 0;
    let dash = 0;

    for (let i = 0; i < string.length; i++) {
        let char = string[i];

        if (char === ".") {
            dot += 1;
        } else if (char === "-") {
            dash += 1;
        }
    }

    return dot > dash;
}

console.log(moreDotLessDash('2-D arrays are fun. I think.'));        // true
console.log(moreDotLessDash('Morse code is great.'));                // true
console.log(moreDotLessDash('.... . -.--'));                         // true
console.log(moreDotLessDash('.--. .-. --- --. .-. .- -- -- . .-.')); // false
console.log(moreDotLessDash('high-flying acrobat.'));                // false