// Pyramid Array

// Write a function pyramidArray(base) that takes in an array of numbers representing the base of a pyramid. 
// The function should return a two-dimensional array representing the completed pyramid. 
// To generate an element of the next level of the pyramid, we sum the elements below and to the left and below and to the right.

function pyramidArray(base) {
    let pyramid = [base];
    let levels = base.length - 1;

    for (let i = 0; i < levels; i++) {
        let previousLevel = pyramid[i];
        let newLevel = generateNewLevel(previousLevel);
        pyramid.push(newLevel);
    }

    return pyramid.reverse();
}

function generateNewLevel(array) {
    let level = [];

    for (let i = 0; i < array.length - 1; i++) {
        let currentElement = array[i];
        let nextElement = array[i + 1];
        let sum = currentElement + nextElement;
        level.push(sum);
    }

    return level;
}

let p1 = pyramidArray([2, 3, 7, 5, 9]);
console.log(p1);
// [
//   [ 85 ],
//   [ 37, 48 ],
//   [ 15, 22, 26 ],
//   [ 5, 10, 12, 14 ],
//   [ 2, 3, 7, 5, 9 ]
// ]

let p2 = pyramidArray([2, 2, 2, 2]);
console.log(p2);
// [
//   [ 16 ],
//   [ 8, 8 ],
//   [ 4, 4, 4 ],
//   [ 2, 2, 2, 2 ]
// ]