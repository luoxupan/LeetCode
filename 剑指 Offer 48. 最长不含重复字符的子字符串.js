/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length === 0) return 0;
  var max = 1;
  var cash = [s[0]];
  for (var i = 1; i < s.length; ++i) {
    var index = cash.indexOf(s[i]);
    if (index !== -1) {
      cash = cash.slice(index + 1);
    }
    cash.push(s[i]);
    max = Math.max(max, cash.length);
  }
  return max;
};