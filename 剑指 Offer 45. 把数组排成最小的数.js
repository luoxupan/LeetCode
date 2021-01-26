/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function(nums) {
  nums = nums.map((num) => String(num));
  nums.sort((a, b) => a + b < b + a ? -1 : 1);
  return nums.join('');
};