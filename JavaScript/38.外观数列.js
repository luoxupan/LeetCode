/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  let ret = '1';
  while (n > 1) {
    ret = getLastN(ret);
    n--;
  }
  return ret;
};

function getLastN(n) {
  let ret = '';
  let len = n.length;
  let p = 0;
  let count = 1;
  while (p < len) {
    while (n[p] === n[p + 1]) {
      p++;
      count++;
    }
    ret = ret + String(count) + n[p];
    count = 1;
    p++;
  }
  return ret;
}
// @lc code=end

