在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。

示例:
```
s = "abaccdeff"
返回 "b"

s = "" 
返回 " "
```
```js
/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
  if (s === '') return ' ';
  var map = {};
  for (var i = 0; i < s.length; ++i) {
    if (!map[s[i]]) {
      map[s[i]] = 1;
    } else {
      map[s[i]]++;
    }
  }
  for (var i = 0; i < s.length; ++i) {
    if (map[s[i]] === 1) {
     return s[i];
    }
  }
  return ' ';
};
```

```js
var firstUniqChar = function(s) {
  for (var i = 0; i < s.length; ++i) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
     return s[i];
    }
  }
  return ' ';
};
```

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
