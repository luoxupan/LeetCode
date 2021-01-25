/**
 * @param {number[]} a
 * @return {number[]}
 */
var constructArr = function(a) {
  var array = [];
  var cur = 1;
  for (var i = 0; i < a.length; ++i) {
    // 先乘左边的数(不包括自己)
    array[i] = cur;
    cur *= a[i];
  }
  cur = 1;
  for (var i = a.length - 1; i >= 0; --i) {
    // 再乘右边的数(不包括自己)
    array[i] *= cur;
    cur *= a[i];
  }
  return array;
};