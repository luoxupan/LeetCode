/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
  let row = matrix.length;
  if (row === 0) {
    return false;
  }
  let column = matrix[0].length;
  let j = column - 1;
  let i = 0;
  while (i < row && j >= 0) {
    let cur = matrix[i][j];
    if (cur === target) {
      return true;
    } else if (cur > target) {
      j--;
    } else {
      i++;
    }
  }
  return false;
};
