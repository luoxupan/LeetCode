### 先来一道 [46. 全排列](https://leetcode-cn.com/problems/permutations/)

给定一个 **没有重复** 数字的序列，返回其所有可能的全排列。

示例:
```
输入: [1,2,3]
输出:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
```
```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  var array = [];
  var path = [];
  var mark = new Array(nums.length).fill(false);
  dfs(nums, path, array, mark);
  return array;
};

var dfs = function(nums, path, array, mark) {
  if (path.length === nums.length) {
    array.push(path.slice());
  } else {
    for (var i = 0; i < nums.length; ++i) {
      if (mark[i] === false) {
        path.push(nums[i]);
        mark[i] = true;
        dfs(nums, path, array, mark);
        mark[i] = false;
        path.pop();
      }
    }
  }
};
```
----

### 剑指 Offer 38. 字符串的排列

输入一个字符串，打印出该字符串中字符的所有排列。

 
你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。


示例:
```
输入：s = "abc"
输出：["abc","acb","bac","bca","cab","cba"]
```

```js
/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function(s) {
  var array = [];
  var path = [];
  var mark = new Array(s.length).fill(false);
  s = s.split('').sort().join(''); // 首先要对题目中给出的nums数组排序，让重复的元素并列排在一起
  dfs(s, path, array, mark);
  return array;
};

var dfs = function(s, path, array, mark) {
  if (path.length === s.length) {
    array.push(path.join(''));
  } else {
    for (var i = 0; i < s.length; ++i) {
      if (mark[i] === false) {
        if (i > 0 && !mark[i-1] && s[i] == s[i - 1]) {
          /**
           * 语义为：当i可以选第一个元素之后的元素时
           * (因为如果i=0，即只有一个元素，哪来的重复？有重复即说明起码有两个元素或以上,i>0)，
           * 然后判断当前元素是否和上一个元素相同？如果相同，再判断上一个元素是否能用？
           * 如果三个条件都满足，那么该分支一定是重复的，应该剪去。
           */
          continue;
        }
        path.push(s[i]);
        mark[i] = true;
        dfs(s, path, array, mark);
        mark[i] = false;
        path.pop();
      }
    }
  }
};
```


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/zi-fu-chuan-de-pai-lie-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

