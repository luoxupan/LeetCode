/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  let ret = parseInt(s);
  const zuida = Math.pow(2, 31) - 1;
  const _zuida = -Math.pow(2, 31);
  if (isNaN(ret)) {
    return 0;
  } else if (ret > zuida || ret < _zuida) {
    return ret < 0 ? _zuida: zuida;
  }
  return ret;
};
// @lc code=end

