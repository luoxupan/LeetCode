/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canJump = function(nums) {
  var p = 1;
  for (var i = nums.length - 2; i >= 0; --i) {
    if (nums[i] >= p) {
      p = 1;
    } else {
      p++;
    }
    if (i === 0 && p > 1) {
      return false;
    }
  }
  return true;
};