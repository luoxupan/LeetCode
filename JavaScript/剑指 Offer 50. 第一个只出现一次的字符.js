/**
 * @param {string} s
 * @return {character}
 */
// 解法一
var firstUniqChar = function(s) {
  if (s === '') return ' ';
  var map = {};
  for (var i = 0; i < s.length; ++i) {
    if (!map[s[i]]) {
      map[s[i]] = 1;
    } else {
      map[s[i]]++;
    }
  }
  for (var i = 0; i < s.length; ++i) {
    if (map[s[i]] === 1) {
     return s[i];
    }
  }
  return ' ';
};

// 解法一
var firstUniqChar = function(s) {
  for (var i = 0; i < s.length; ++i) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
     return s[i];
    }
  }
  return ' ';
};