实现 pow(x, n) ，即计算 x 的 n 次幂函数（即，xn）。不得使用库函数，同时不需要考虑大数问题。

 

示例 1：
```
输入：x = 2.00000, n = 10
输出：1024.00000
```
示例 2：
```
输入：x = 2.10000, n = 3
输出：9.26100
```
示例 3：
```
输入：x = 2.00000, n = -2
输出：0.25000
```
解释：2-2 = 1/22 = 1/4 = 0.25


```js
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  /**
   * 3 * 3 * 3 * 3 ===> 9 * 9
   */
  if (n === 0) return 1;
  var cash = [];
  var curNum = x;;
  var flag = n > 0 ? true : false; // 考虑负数
  n = Math.abs(n);
  while (n !== 1) {
    if (n%2 === 1) {
      n -= 1;
      cash.push(curNum);
    } else {
      n /= 2;
      curNum *= curNum;
    }
  }
  cash.push(curNum);
  var ret = cash.reduce((x, y) => x * y);
  return flag ? ret : 1/ret;
};
```


