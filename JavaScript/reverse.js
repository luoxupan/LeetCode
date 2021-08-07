/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const ret = parseInt(String(Math.abs(x)).split('').reverse().join(''));
  if (ret > (Math.pow(2, 31))) {
    return 0;
  }
  return x < 0 ? -ret : ret;
};
// @lc code=end

