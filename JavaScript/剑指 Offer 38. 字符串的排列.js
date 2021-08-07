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