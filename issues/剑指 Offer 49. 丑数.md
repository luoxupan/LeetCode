我们把只包含质因子 2、3 和 5 的数称作丑数（Ugly Number）。求按从小到大的顺序的第 n 个丑数。

 

示例:
```
输入: n = 10
输出: 12
解释: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 是前 10 个丑数。
```

```js
/**
 * @param {number} n
 * @return {number}
 * 
 * 这个题用三指针，第一个丑数是1，以后的丑数都是基于前面的小丑数分别乘2，3，5构成的。
 * 我们每次添加进去一个当前计算出来个三个丑数的最小的一个，并且是谁计算的，谁指针就后移一位。
 * 
 */
var nthUglyNumber = function(n) {
  var array =[1];
  var a2 = 0;
  var a3 = 0;
  var a5 = 0;
  for (var i = 1; i < n; i++) {
    array[i] = Math.min(array[a2] * 2, array[a3] * 3, array[a5] * 5);
    if (array[a2] * 2 === array[i]) a2++;
    if (array[a3] * 3 === array[i]) a3++;
    if (array[a5] * 5 === array[i]) a5++;
  }
  return array[n - 1];
};
```

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/chou-shu-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
