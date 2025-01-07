// Spiral Matrix

// Write a function spiralOrder(matrix) that takes in a 2-dimensional array (matrix) and returns an array containing the elements in spiral order.

function spiralOrder(matrix) {
    // Empty
    if (!matrix.length) {
        return [];
    }

    // Array
    const result = [];

    // Dimensions
    let rows = matrix.length;
    let cols = matrix[0].length;

    // Directions
    let top = 0;
    let left = 0;
    let right = cols - 1;
    let bottom = rows - 1;

    // Movement
    while (top <= bottom && left <= right) {

        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]); // loop 1 = [1, 2, 3] + loop 2 = [5]
        }
        top++; // index = 1;

        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]); // loop 1 = [6, 9]
        }
        right--; // index = 1;

        if (top <= bottom) {
            for (let i = right; i >= left; i--) { // right = index 1 = [2], [5], [8]
                result.push(matrix[bottom][i]) // loop 1 = [8, 7]
            }
        }
        bottom--; // index = 1;

        if (left <= right) {
            for (let i = bottom; i >= top; i--) { // bottom = index 1 = [4, 5, 6]
                result.push(matrix[i][left]); // loop 1 = [4]
            }
        }
        left++; // index = 1;
    }

    // Spiral
    return result;
}

matrix = [
[1, 2, 3],
[4, 5, 6],
[7, 8, 9]];

console.log(spiralOrder(matrix)); // [1,2,3,6,9,8,7,4,5]

matrix = [
[1, 2, 3, 4],
[5, 6, 7, 8],
[9, 10, 11, 12]];

console.log(spiralOrder(matrix)); // [1,2,3,4,8,12,11,10,9,5,6,7]