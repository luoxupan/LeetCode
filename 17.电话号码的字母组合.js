/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  };
  let ret = [];
  let list = [];
  if (digits.length === 0) {
      return [];
  }
  for (let i = 0; i < digits.length; ++i) {
      list.push(map[digits[i]]);
  }
  getString(list, 0, ret, '');
  return ret;
};
function getString(list, i, ret, temp) {
  if (i < list.length - 1) {
      for (let j = 0; j < list[i].length; ++j) {
          getString(list, i + 1, ret, temp + list[i][j]);
      }
  } else {
      for (let j = 0; j < list[i].length; ++j) {
          ret.push(temp + list[i][j]);
      }
  }
}
// @lc code=end

