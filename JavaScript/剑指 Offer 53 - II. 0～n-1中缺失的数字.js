/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  var maxNum = nums[nums.length - 1];
  var left = 0;
  var right = maxNum;
  while (left < right) {
    var mid = Math.floor((left + right) / 2);
    if (nums[mid] === mid) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left === maxNum ? maxNum + 1 : left; // 注意边界
};
