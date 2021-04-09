/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {
  var p = 1;
  var ret = new Array(nums.length).fill(1);
  for (var i = 0; i < nums.length; ++i) {
    ret[i] = p;
    p *= nums[i];
  }
  p = 1;
  for (var i = nums.length - 1; i >= 0; --i) {
    ret[i] *= p;
    p *= nums[i];
  }
  return ret;
};
