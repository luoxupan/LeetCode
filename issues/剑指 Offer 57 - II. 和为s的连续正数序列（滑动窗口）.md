输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。

序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。

 

示例 1：
```
输入：target = 9
输出：[[2,3,4],[4,5]]
```
示例 2：
```
输入：target = 15
输出：[[1,2,3,4,5],[4,5,6],[7,8]]
```

```js
/**
 * @param {number} target
 * @return {number[][]}
 * 滑动窗口
 */
var findContinuousSequence = function(target) {
  var ret = [];
  var l = 1;
  var r = 2;
  var sum = l + r;
  while (l < r && r < target) {
    if (sum === target) {
      if (r - l >= 1) {
        var cash = [];
        for (var i = l; i <= r; ++i) {
          cash.push(i);
        }
        ret.push(cash);
      } else {
        r++;
        sum += r;
      }
      sum -= l;
      l++;
    } else if (sum > target) {
      sum -= l;
      l++;
    } else {
      r++;
      sum += r;
    }
  }
  return ret;
};
```

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
