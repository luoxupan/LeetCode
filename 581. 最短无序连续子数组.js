/**
 * @param {number[]} nums
 * @return {number}
 */
 var findUnsortedSubarray = function(nums) {
  var _nums = [...nums];
  nums.sort((x, y) => x - y);
  var i = 0;
  var j = nums.length - 1;
  while (i < nums.length && nums[i] === _nums[i]) {
    i++;
  }
  while (j >= 0 && nums[j] === _nums[j]) {
    j--;
  }
  return j > i ? j - i + 1 : 0;
};