/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  if (nums.length === 0) return 1;
  for (let i = 1; i <= nums.length + 1; ++i) {
    if (!nums.includes(i)) {
      return i;
    }
  }
  return nums.length;
};
// @lc code=end

