/**
 * @param {number} n
 * @return {number[][]}
 */
 var generateMatrix = function(n) {
  var topRow = 0;
  var bottomRow = n - 1;
  var topCol = 0;
  var bottomCol = n - 1;
  var ret = new Array(n);
  for (var i = 0; i < n; ++i) {
    ret[i] = new Array(n).fill(0);
  }
  var p = 1;
  while (true) {
    for (var i = topCol; i <= bottomCol; ++i) {
      ret[topRow][i] = p++;
    }
    topRow++;
    if (topRow > bottomRow) break;
    for (var i = topRow; i <= bottomRow; ++i) {
      ret[i][bottomCol] = p++;
    }
    bottomCol--;
    if (topCol > bottomCol) break;
    for (var i = bottomCol; i >= topCol; --i) {
      ret[bottomRow][i] = p++;
    }
    bottomRow--;
    if (topRow > bottomRow) break;
    for (var i = bottomRow; i >= topRow; --i) {
      ret[i][topCol] = p++;
    }
    topCol++;
    if (topCol > bottomCol) break;
  }
  return ret;
};
