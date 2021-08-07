/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function(m, n, k) {
  var visited = new Array(m).fill(null).map(() => new Array(n).fill(false));
  return dfs(0, 0, m , n, k, visited);
};

var dfs = function(i, j, m, n, k, visited) {
  if (i >= m || j >= n || i < 0 || j < 0 || visited[i][j]
    || (parseInt(i/10) + parseInt(i%10) + parseInt(j/10) + parseInt(j%10)) > k) {
    return 0;
  }
  visited[i][j] = true;
  return dfs(i + 1, j, m, n, k, visited) + dfs(i, j + 1, m, n, k, visited) + 1;
}


/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
 var movingCount = function(m, n, k) {
  var array = new Array(m).fill(false).map(() => new Array(n).fill(false));
  return dfs(array, m, n, 0, 0, k);
};

var dfs = function(array, m, n, i, j, k) {
  if (i < 0 || j < 0 || i >= m || j >= n || array[i][j] === true) {
    return 0;
  }
  if (('' + i + j).split('').reduce((x, y) => Number(x) + Number(y)) > k) {
    return 0;
  }
  array[i][j] = true;
  return dfs(array, m, n, i + 1, j, k) + dfs(array, m, n, i, j + 1, k) + 1;
};