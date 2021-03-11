/**
 * @param {number} n
 * @return {number}
 */
var numWays = function(n) {
  if (n === 0 || n === 1) return 1;
  var l = 1;
  var r = 1;
  var ret;
  for (var i = 2; i <= n; ++i) {
    ret = (l + r) % 1000000007;
    l = r;
    r = ret;
  }
  return ret;
};