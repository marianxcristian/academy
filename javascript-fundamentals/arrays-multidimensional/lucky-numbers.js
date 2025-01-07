// Lucky Numbers

// Write a function luckyNumbers(matrix) that takes in a 2-dimensional array(matrix) and returns all lucky numbers in any order.
// A lucky number is the minimum element in its row and the maximum in its column.

function minNumbers(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let nums = [];

    for (let r = 0; r < rows; r++) {
        let min = matrix[r][0];

        for (let c = 1; c < cols; c++) {
            let val = matrix[r][c];

            if (val < min) {
                min = val;
            }
        }

        nums.push(min);
    }

    return nums;
}

function maxNumbers(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let nums = [];

    for (let c = 0; c < cols; c++) {
        let max = matrix[0][c];

        for (let r = 0; r < rows; r++) {
            let val = matrix[r][c];

            if (val > max) {
                max = val;
            }
        }

        nums.push(max);
    }

    return nums;
}

function luckyNumbers(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let nums = [];

    for (let r = 0; r < rows; r++) {

        for (let c = 0; c < cols; c++) {
            let ele = matrix[r][c];
            let max = maxNumbers(matrix);
            let min = minNumbers(matrix);

            if (ele === min[r] && ele === max[c]) {
                nums.push(ele);
            }
        }
    }

    return nums;
};

matrix = [[5, 9, 21],
[9, 19, 6],
[12, 14, 15]]

console.log(luckyNumbers(matrix)); // [12]

matrix = [[5, 10, 8, 6],
[10, 2, 7, 9],
[21, 15, 19, 10]]

console.log(luckyNumbers(matrix)); // [10]