/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var exchange = function(nums) {
  var l = 0;
  var r = nums.length - 1;
  while (l < r) {
    while (l < r && nums[l] % 2 === 1) {
      l++;
    }
    while (l < r && nums[r] % 2 === 0) {
      r--;
    }
    if (l < r) {
      var temp = nums[l];
      nums[l] = nums[r];
      nums[r] = temp;
    }
  }
  return nums;
};