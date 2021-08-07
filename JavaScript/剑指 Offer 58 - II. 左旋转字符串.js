/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 * 可以三次翻转
 */
var reverseLeftWords = function(s, n) {
  return s.slice(n) + s.slice(0, n);
};
