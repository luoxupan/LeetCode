/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findKthLargest = function(nums, k) {
  var target = nums.length - k;
  var left = 0;
  var right = nums.length - 1;
  while (true) {
    var idx = findIndex(nums, left, right);
    if (idx === target) {
      return nums[idx];
    } else if (idx > target) {
      right = idx - 1;
    } else {
      left = idx + 1;
    }
  }
};

var findIndex = function(nums, left, right) {
  var mid = nums[left];
  var l = left;
  var r = right;
  while (l < r) {
    while (l < r && nums[r] > mid) {
      r--;
    }
    if (l < r) {
      nums[l] = nums[r];
      l++;
    }
    while (l < r && nums[l] < mid) {
      l++;
    }
    if (l < r) {
      nums[r] = nums[l];
      r--;
    }
  }
  nums[l] = mid;
  return l;
};
