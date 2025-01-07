// Max in Columns

// Write a function maxColumn(matrix) that takes in a 2-dimensional array (matrix) and returns an array containing the maximum value in each column. 
// The array length should be equal to the number of columns, such that returnArray[i] is equal to the max value in the ith column.

function maxColumn(matrix) {
    let maxValues = [];
    let height = matrix.length;
    let width = matrix[0].length;

    for (let column = 0; column < width; column++) {
        let maxValue = matrix[0][column];

        for (let row = 0; row < height; row++) {
            let newValue = matrix[row][column];

            if (newValue > maxValue) {
                maxValue = newValue;
            }
        }

        maxValues.push(maxValue);
    }

    return maxValues;
}

matrix = [[5, 9, 21],
[9, 19, 6],
[12, 14, 15]]

console.log(maxColumn(matrix)); // [12, 19, 21]