/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let idx = 0;
  // [], {}, ()
  const map = {
    ']': '[',
    '}': '{',
    ')': '(',
  };
  const len = s.length;
  let stack = [];
  while (idx < len) {
    if (stack.length === 0) {
      stack.push(s[idx]);
    } else {
      if (['[', '{', '('].includes(s[idx])) {
        stack.push(s[idx]);
      } else {
        if (stack[stack.length - 1] === map[s[idx]]) {
          stack.pop();
        } else {
          return false
        }
      }
    }
    idx++;
  }
  return stack.length > 0 ? false : true;
};
// @lc code=end

