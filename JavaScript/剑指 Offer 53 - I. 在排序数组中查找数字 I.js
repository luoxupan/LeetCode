/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  var left = 0;
  var right = nums.length - 1;
  var count = 0;
  var mid = 0;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      break;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  if (nums[mid] === target) {
    count = 1;
    var l = mid - 1;
    var r = mid + 1;
    while (l >= 0 && nums[l] === target) {
      count++;
      l--;
    }
    while (r < nums.length && nums[r] === target) {
      count++;
      r++;
    }
  }
  return count;
};