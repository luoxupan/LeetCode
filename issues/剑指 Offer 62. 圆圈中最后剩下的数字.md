0,1,···,n-1这n个数字排成一个圆圈，从数字0开始，每次从这个圆圈里删除第m个数字（删除后从下一个数字开始计数）。求出这个圆圈里剩下的最后一个数字。

例如，0、1、2、3、4这5个数字组成一个圆圈，从数字0开始每次删除第3个数字，则删除的前4个数字依次是2、0、4、1，因此最后剩下的数字是3。

 

示例 1：
```
输入: n = 5, m = 3
输出: 3
```
示例 2：
```
输入: n = 10, m = 17
输出: 2
```

> 暴力解法超时了
```js
/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function(n, m) {
  var array = [];
  for (var i = 0; i < n; ++i) {
    array.push(i);
  }
  var idx = 0;
  while (n > 1) {
    if (idx === n) idx = 0;
    for (var i = 1; i < m; ++i) {
      idx++;
      if (idx === n) idx = 0;
    }
    array.splice(idx, 1);
    n--;
  }
  return array[0];
};
```

[题解](https://leetcode-cn.com/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof/solution/javajie-jue-yue-se-fu-huan-wen-ti-gao-su-ni-wei-sh/)

```js
/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function(n, m) {
  var array = [];
  for (var i = 0; i < n; ++i) array.push(i);
  var idx = 0;
  while (n > 1) {
    idx = (idx + m - 1) % n;
    array.splice(idx, 1);
    n--;
  }
  return array[0];
};
```

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
