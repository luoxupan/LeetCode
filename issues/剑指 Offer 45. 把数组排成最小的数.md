输入一个非负整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。

 

示例 1:
```
输入: [10,2]
输出: "102"
```
示例 2:
```
输入: [3,30,34,5,9]
输出: "3033459"
```

### sort

- 如果 `compareFunction(a, b)` 小于 0 ，那么 a 会被排列到 b 之前；
- 如果` compareFunction(a, b) `等于 0 ， a 和 b 的相对位置不变。
- 如果` compareFunction(a, b) `大于 0 ， b 会被排列到 a 之前。

```js
/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function(nums) {
  nums = nums.map((num) => String(num));
  nums.sort((a, b) => a + b < b + a ? -1 : 1);
  return nums.join('');
};
```




