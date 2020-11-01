/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  const len = strs.length;
  if (len === 0) return '';
  for (let j = 0; j < strs[0].length; ++j) {
    for (let i = 1; i < len; ++i) {
      if (strs[i][j] !== strs[i - 1][j]) {
        return strs[0].slice(0, j);
      }
    }
  }
  return strs[0];
};
// @lc code=end

