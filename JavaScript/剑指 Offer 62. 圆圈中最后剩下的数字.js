/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function(n, m) {
  var array = [];
  for (var i = 0; i < n; ++i) array.push(i);
  var idx = 0;
  while (n > 1) {
    idx = (idx + m - 1) % n;
    array.splice(idx, 1);
    n--;
  }
  return array[0];
};
