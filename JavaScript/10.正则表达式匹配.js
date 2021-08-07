/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  if (p.length === 0) {
    return s.length === 0;
  }
  const isFirstCharEqu = s.length !== 0 && ((s[0] === p[0]) || (p[0] === '.'));
  if (p.length >= 2 && p[1] === '*') {
    return isMatch(s, p.slice(2)) || isFirstCharEqu && isMatch(s.slice(1), p);
  } else {
    return isFirstCharEqu && isMatch(s.slice(1), p.slice(1))
  }
};
// @lc code=end

