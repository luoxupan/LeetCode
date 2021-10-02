在一个 m*n 的棋盘的每一格都放有一个礼物，每个礼物都有一定的价值（价值大于 0）。你可以从棋盘的左上角开始拿格子里的礼物，并每次向右或者向下移动一格、直到到达棋盘的右下角。给定一个棋盘及其上面的礼物的价值，请计算你最多能拿到多少价值的礼物？

 

示例 1:
```
输入: 
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
输出: 12
解释: 路径 1→3→5→2→1 可以拿到最多价值的礼物
```

### 回溯法
```js
/**
 * @param {number[][]} grid
 * @return {number}
 */

var max = 0;
var value = 0;

var maxValue = function(grid) {
  max = 0;
  value = 0;
  dfs(0, 0, grid, grid.length, grid[0].length);
  return max;
};

var dfs = function(i, j, grid, row, col) {
  if (i >= row || j >= col) return;
  value += grid[i][j];
  if (value > max) {
    max = value;
  }
  dfs(i + 1, j, grid, row, col);
  dfs(i, j + 1, grid, row, col);
  value -= grid[i][j];
};
```

### dp解法
```js
/**
 * @param {number[][]} grid
 * @return {number}
 * 
 * 转移方程：
 * f(i, j) = max{f(i - 1, j), f(i, j - 1)} + grid[i][j]
 */

var maxValue = function(grid) {
  var dp = new Array(grid[0].length + 1).fill(0);
  for (var i = 1; i <= grid.length; ++i) {
    for (var j = 1; j <= grid[0].length; ++j) {
      dp[j] = Math.max(dp[j], dp[j - 1]) + grid[i - 1][j - 1];
    }
  }
  return dp[grid[0].length];
};
```


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/li-wu-de-zui-da-jie-zhi-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
