/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
  var topRow = 0;
  var bottomRow = matrix.length - 1;
  var topCol = 0;
  var bottomCol = matrix[0].length - 1;
  var ret = [];
  while (true) {
    for (var i = topCol; i <= bottomCol; ++i) {
      ret.push(matrix[topRow][i]);
    }
    topRow++;
    if (topRow > bottomRow) break;
    for (var i = topRow; i <= bottomRow; ++i) {
      ret.push(matrix[i][bottomCol]);
    }
    bottomCol--;
    if (topCol > bottomCol) break;
    for (var i = bottomCol; i >= topCol; --i) {
      ret.push(matrix[bottomRow][i]);
    }
    bottomRow--;
    if (topRow > bottomRow) break;
    for (var i = bottomRow; i >= topRow; --i) {
      ret.push(matrix[i][topCol]);
    }
    topCol++;
    if (topCol > bottomCol) break;
  }
  return ret;
};
