/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  if (p.length === 0) {
    return s.length === 0;
  }
  var isSirstCEqual = s.length !== 0 && (s[0] === p[0] || p[0] === '.');
  if (p.length >= 2 && p[1] === '*') {
    return isMatch(s, p.slice(2)) || (isSirstCEqual && isMatch(s.slice(1), p));
  } else {
    return isSirstCEqual && isMatch(s.slice(1), p.slice(1));
  }
};
