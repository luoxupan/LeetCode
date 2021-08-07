/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  let flag = (dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0) ? -1 : 1;
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);
  if (dividend < divisor) return 0;
  if (dividend === divisor) return flag * 1;
  let ret = 1;
  let cash = divisor;
  while (cash + cash <= dividend) {
    ret = ret + ret;
    cash = cash + cash;
  }
  while (cash + divisor <= dividend) {
    ret = ret + 1;
    cash = cash + divisor;
  }
  return flag > 0 ? Math.min(ret, 2147483647) : -ret;
};
// @lc code=end

