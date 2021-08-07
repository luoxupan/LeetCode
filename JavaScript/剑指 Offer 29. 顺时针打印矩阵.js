/**
 * @param {number[][]} matrix
 * @return {number[]}
 * [
 *   [1,2,3,4],
 *   [5,6,7,8],
 *   [9,10,11,12]
 * ]
 */
var spiralOrder = function(matrix) {
  if (matrix.length === 0) return [];
  var rowT = 0; // 记录行上边界
  var rowB = matrix.length - 1; // 记录行底边界
  var columnL = 0; // 记录列左边界
  var columnR = matrix[0].length - 1; // 记录列右部边界
  // 每循环一次相应边界就减少
  var ret = [];
  while (true) {
    for (var j = columnL; j <= columnR; j++) {
      // 从左到右
      ret.push(matrix[rowT][j]);
    }
    if (++rowT > rowB) break;
    for (var i = rowT; i <= rowB; i++) {
      // 从上到下
      ret.push(matrix[i][columnR]);
    }
    if (columnL > --columnR) break;
    for (var i = columnR; i >= columnL; i--) {
      // 从右到左
      ret.push(matrix[rowB][i]);
    }
    if (rowT > --rowB) break;
    for (var i = rowB; i >= rowT; i--) {
      // 从下到上
      ret.push(matrix[i][columnL]);
    }
    if (++columnL > columnR) break;
  }
  return ret;
};
