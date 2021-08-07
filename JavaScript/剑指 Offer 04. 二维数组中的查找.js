/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
  if (matrix.length === 0) return false;
  var row = matrix.length - 1;
  var col = matrix[0].length - 1;
  var r = 0;
  var c = col;
  while (r <= row && c >= 0) {
    if (matrix[r][c] === target) {
      return true;
    } else if (matrix[r][c] > target) {
      c--;
    } else {
      r++;
    }
  }
  return false;
};