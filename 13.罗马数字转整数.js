/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  // const key = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  // const value = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const map = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  let ret = 0;
  while (s.length > 0) {
    let key = s.slice(0, 2);
    if (map[key]) {
      ret += map[key];
      s = s.slice(2);
    } else {
      key = s.slice(0, 1);
      if (map[key]) {
        ret += map[key];
        s = s.slice(1);
      }
    }
  }
  return ret;
};
// @lc code=end

