/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
var p = nums.length - 2;
  while (p >= 0) {
    if (nums[p] < nums[p + 1]) {
      var mixIdx = p + 1;
      for (var i = p + 1; i < nums.length; ++i) {
        if (nums[i] < nums[mixIdx] && nums[i] > nums[p]) {
          mixIdx = i;
        }
      }
      var temp = nums[p];
      nums[p] = nums[mixIdx];
      nums[mixIdx] = temp;
      var _nums = nums.slice(0, p + 1).concat(nums.slice(p + 1).sort((x, y) => x - y));
      _nums.forEach((_, idx) => nums[idx] = _nums[idx]);
      return nums;
    }
    p--;
  }
  return nums.reverse();
};