/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function(nums) {
  nums.sort((x, y) => x - y);
  var zeroCount = 0;
  for (var i = 0; i < nums.length; ++i) {
    if (nums[i] === 0) {
      zeroCount++;
      continue;
    }
    var j = i + 1;
    if (j < nums.length) {
      var temp = nums[j] - nums[i];
      if (temp === 0) return false;
      while (temp > 1) {
        if (zeroCount === 0) {
          return false;
        }
        zeroCount--;
        temp--;
      }
    }
  }
  return true;
};