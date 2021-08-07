/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const len = s.length;
  if (len === 0) {
    return 0;
  }
  let left = 0;
  let right = 1;
  let ret = 1;
  while (right < len) {
    const char = s[right];
    const string = s.slice(left, right);
    // '01234'.slice(0, 1) ==> '0'
    const idx = string.indexOf(char);
    if (idx !== -1) {
      const l = right - left;
      ret = l > ret ? l : ret;
      left = left + idx + 1;
    }
    right++;
  }
  return Math.max(ret, right - left);
};
// @lc code=end

