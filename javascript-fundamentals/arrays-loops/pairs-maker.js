// Pairs Maker

// Write a function pairsMaker(arr) that takes in a an array as an argument. 
// The function should return a 2D array where the subarrays represent unique pairs of element from the input array.

function pairsMaker(arr) {
    let pairs = [];

    for (let i = 0; i < arr.length; i++) {
        let ele1 = arr[i];

        for (let j = i + 1; j < arr.length; j++) {
            let ele2 = arr[j];
            let pair = [ele1, ele2];
            pairs.push(pair)
        }
    }

    return pairs;
}

console.log(pairsMaker(['a', 'b', 'c', 'd'])); // =>
// [ [ 'a', 'b' ],
//   [ 'a', 'c' ],
//   [ 'a', 'd' ],
//   [ 'b', 'c' ],
//   [ 'b', 'd' ],
//   [ 'c', 'd' ] ]

console.log(pairsMaker(['Rosemary', 'Alex', 'Connor'])); // =>
// [ [ 'Rosemary', 'Alex' ],
//   [ 'Rosemary', 'Connor' ],
//   [ 'Alex', 'Connor' ] ]