请从字符串中找出一个最长的不包含重复字符的子字符串，计算该最长子字符串的长度。

 

示例 1:
```
输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
```
示例 2:
```
输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
```
示例 3:
```
输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
```

```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length === 0) return 0;
  var max = 1;
  var cash = [s[0]];
  for (var i = 1; i < s.length; ++i) {
    var index = cash.indexOf(s[i]);
    if (index !== -1) {
      cash = cash.slice(index + 1);
    }
    cash.push(s[i]);
    max = Math.max(max, cash.length);
  }
  return max;
};
```

> 滑动窗口

```js
/**
 * @param {string} s
 * @return {number}
 * 滑动窗口
 */
var lengthOfLongestSubstring = function(s) {
  var max = 1;
  var res = 0;
  var i = -1;
  var map = new Map();
  for (var j = 0; j < s.length; ++j) {
    if (map.has(s[j])) {
      i = Math.max(i, map.get(s[j]));
    }
    res = Math.max(res, j - i);
    map.set(s[j], j);
  }
  return res;
};
```

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/zui-chang-bu-han-zhong-fu-zi-fu-de-zi-zi-fu-chuan-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
