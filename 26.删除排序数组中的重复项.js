/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let l = 0;
  let r = 1;
  while (l < r && r < nums.length) {
    if (nums[l] === nums[r]) {
      nums.splice(r, 1);
    } else {
      l++;
      r++;
    }
  }
  return nums.length;
};
// @lc code=end

