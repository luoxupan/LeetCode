把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一个旋转，该数组的最小值为1。  

示例 1：
```
输入：[3,4,5,1,2]
输出：1
```
示例 2：
```
输入：[2,2,2,0,1]
输出：0
```

解法一：既 不满足排序数组前一个（i）比后一个（j）大的情况下，r就是最小的那个数
```js
var minArray = function(numbers) {
  var l = 0;
  var r = 1;
  while (r < numbers.length) {
    if (numbers[l] <= numbers[r]) {
      l++;
      r++;
    } else {
      return numbers[r];
    }
  }
  return numbers[0];
};
```

解法二：[二分法](https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof/solution/mian-shi-ti-11-xuan-zhuan-shu-zu-de-zui-xiao-shu-3/)
```js
/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
  var l = 0;
  var r = numbers.length - 1;
  while (l < r) {
    var mid = Math.floor((l + r) / 2);
    // 只要右边比中间大，那右边一定是有序数组
    if (numbers[mid] < numbers[r]) {
      r = mid;
    } else if (numbers[mid] > numbers[r]) {
      l = mid + 1;
    } else {
      // 去重
      r--;
    }
  }
  return numbers[l];
};
```
