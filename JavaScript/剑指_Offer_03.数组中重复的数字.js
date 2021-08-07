/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
  let cash = [];
  for (let i = 0; i < nums.length; ++i) {
    if (cash.includes(nums[i])) {
      return nums[i];
    } else {
      cash.push(nums[i]);
    }
  }
};
