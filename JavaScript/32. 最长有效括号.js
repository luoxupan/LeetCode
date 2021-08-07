/**
 * @param {string} s
 * @return {number}
 */

 var longestValidParentheses = function(s) {
  var max = 0;
  var stack = [-1];
  for (var i = 0; i < s.length; ++i) {
    var idx = stack[stack.length - 1];
    if (idx !== -1 && s[idx] === '(' && s[i] === ')') {
      stack.pop();
      max = Math.max(max, i - stack[stack.length - 1]);
    } else {
      stack.push(i);
    }
  }
  return max;
};
