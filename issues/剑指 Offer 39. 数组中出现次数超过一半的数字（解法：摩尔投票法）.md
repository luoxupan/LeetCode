数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。

 

你可以假设数组是非空的，并且给定的数组总是存在多数元素。

 

示例 1:
```
输入: [1, 2, 3, 2, 2, 2, 5, 4, 2]
输出: 2
```

```js
/**
 * @param {number[]} nums
 * @return {number}
 * 解法：摩尔投票法
 * 可以理解成混战极限一换一，不同的两者一旦遇见就同归于尽，最后活下来的值都是相同的，即要求的结果
 * 时间O(n)，空间O(1)
 */
var majorityElement = function(nums) {
  var count = 0;
  var char = null;
  for (var i = 0;i < nums.length; ++i) {
    if (count === 0) {
      char = nums[i];
      count++;
    } else {
      count = char === nums[i] ? count + 1 : count - 1;
    }
  }
  return char;
};

```


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/shu-zu-zhong-chu-xian-ci-shu-chao-guo-yi-ban-de-shu-zi-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
