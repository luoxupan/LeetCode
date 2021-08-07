/**
 * @param {number} n
 * @return {number}
 * 0 1 1 2 3
 */

// 超出时间限制
// var fib = function(n) {
//   if (n === 0) return 0;
//   if (n === 1) return 1;
//   return fib(n - 1) + fib(n - 2);
// };

var fib = function(n) {
  if (n === 0 || n === 1) return n;
  var l = 0;
  var r = 1;
  var ret;
  for (var i = 2; i <= n; ++i) {
    ret = (l + r) % 1000000007;
    l = r;
    r = ret;
  }
  return ret;
};
