/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(target) {
  var ret = [];
  var l = 1;
  var r = 2;
  var sum = l + r;
  while (l < r && r < target) {
    if (sum === target) {
      if (r - l >= 1) {
        var cash = [];
        for (var i = l; i <= r; ++i) {
          cash.push(i);
        }
        ret.push(cash);
      } else {
        r++;
        sum += r;
      }
      sum -= l;
      l++;
    } else if (sum > target) {
      sum -= l;
      l++;
    } else {
      r++;
      sum += r;
    }
  }
  return ret;
};
