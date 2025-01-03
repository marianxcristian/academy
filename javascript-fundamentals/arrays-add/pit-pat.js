// Pit Pat

// Write a function pitPat(max) that accepts a number as an arg. 
// The function should return an array containing all positive numbers less than or equal to max that are divisible by either 4 or 6, but not both.

function pitPat(max) {
    let nums = [];

    for (let i = 1; i <= max; i++) {
        let num = i;

        if (num % 4 === 0 && num % 6 !== 0) {
            nums.push(num);
        } else if (num % 4 !== 0 && num % 6 === 0) {
            nums.push(num);
        }
    }

    return nums;
}

console.log(pitPat(18)); // [ 4, 6, 8, 16, 18 ]
console.log(pitPat(30)); // [ 4, 6, 8, 16, 18, 20, 28, 30 ]