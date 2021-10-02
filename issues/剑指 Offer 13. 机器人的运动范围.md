地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。一个机器人从坐标 [0, 0] 的格子开始移动，它每次可以向左、右、上、下移动一格（不能移动到方格外），也不能进入行坐标和列坐标的数位之和大于k的格子。例如，当k为18时，机器人能够进入方格 [35, 37] ，因为3+5+3+7=18。但它不能进入方格 [35, 38]，因为3+5+3+8=19。请问该机器人能够到达多少个格子？


示例 1：
```
输入：m = 2, n = 3, k = 1
输出：3
```

示例 2：
```
输入：m = 3, n = 1, k = 0
输出：1
```

```js
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
    // parseInt(i/10) + parseInt(i%10) + parseInt(j/10) + parseInt(j%10) 这样也可以
    return 0;
  }
  array[i][j] = true;
  return dfs(array, m, n, i + 1, j, k) + dfs(array, m, n, i, j + 1, k) + 1;
};
```




