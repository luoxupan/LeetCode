/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const ret = [];
  generate(ret, n, 0, 0, '');
  return ret;
};
var generate = function(ret, n, l, r, str) {
  if (l > n || r > n || l < r) return;
  if (l === n && r === n) {
    ret.push(str);
    return;
  }
  generate(ret, n , l + 1, r, str + '(');
  generate(ret, n , l, r + 1, str + ')');
};
// @lc code=end

