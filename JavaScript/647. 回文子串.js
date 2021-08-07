/**
 * @param {string} s
 * @return {number}
 */

var count = 0;
var countSubstrings = function(s) {
  count = 0;
  for (var i = 0; i < s.length; ++i) {
    func(s, i, i);
  }
  return count;
};

var func = function(s, l, r) {
  while (s[l] === s[r + 1]) {
    r++;
    count++;
  }
  while (l >= 0 && r < s.length && l <= r && s[l] === s[r]) {
    l--;
    r++;
    count++;
  }
}; 