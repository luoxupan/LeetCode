/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */

var findLongest = function(string, l, r) {
  while (string[l] === string[r + 1]) {
    r++;
  }
  const ret = r;
  while (l >= 0 && r < string.length && string[l] === string[r]) {
    l--;
    r++;
  }
  return [l + 1, r - 1, ret];
}
var longestPalindrome = function(s) {
  const len = s.length;
  let ret_l = 0;
  let ret_r = 0;
  let l = 0;
  let r = 0;
  for (let i = 0; i < len; i++) {
    [l, r, i] = findLongest(s, i, i);
    if ((r - l) > (ret_r - ret_l)) {
      ret_l = l;
      ret_r = r;
    }
  }
  return s.slice(ret_l, ret_r + 1);
};
// @lc code=end

