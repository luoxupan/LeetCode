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
