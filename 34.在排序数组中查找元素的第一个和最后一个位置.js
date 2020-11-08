/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (nums[mid] === target) {
      let left = mid;
      let right = mid;
      while (nums[left - 1] === target) {
        left--;
      }
      while (nums[right + 1] === target) {
        right++;
      }
      return [left, right];
    } else if (nums[mid] > target) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return [-1, -1];
};
// @lc code=end

