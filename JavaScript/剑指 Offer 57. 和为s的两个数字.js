/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    var l = 0;
    var r = nums.length - 1;
    while (l < r) {
      var sum = nums[l] + nums[r];
      if (sum === target) {
        return [nums[l], nums[r]];
      } else if (sum > target) {
        r--;
      } else {
        l++;
      }
    }
    return [];
  };
  
  // 二分查找法
  var twoSum = function(nums, target) {
    for (var i = 0; i < nums.length; ++i) {
      if (find(nums.slice(i), target - nums[i])) {
        return [nums[i], target - nums[i]];
      }
    }
    return [];
  };
  
  var find = function(array, target) {
    var l = 0;
    var r = array.length - 1;
    while (l <= r) {
      var mid = Math.floor((l + r) / 2);
      if (array[mid] === target) {
        return target;
      } else if (array[mid] > target) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
    return null;
  };
  