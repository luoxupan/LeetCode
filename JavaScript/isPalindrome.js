/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  const s = String(x);
  let i = 0;
  let j = s.length - 1;
  while (i <= j && s[i] === s[j]) {
    i++;
    j--;
  }
  return i >= j ? true : false;
};
// @lc code=end

