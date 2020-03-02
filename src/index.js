
module.exports = function towelSort(matrix) {
    if (!matrix || matrix.length == 0) {
        return [];
    }
    let toSort = [];
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 == 1) {
            matrix[i] = matrix[i].reverse();
            for (let j = 0; j < matrix[i].length; j++) {
                toSort.push(matrix[i][j]);
            }
        } else {
            for (let j = 0; j < matrix[i].length; j++) {
                toSort.push(matrix[i][j]);
            }
        }
    }
    return toSort;
}

