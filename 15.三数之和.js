/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums = nums.sort((n, m) => n - m)
  let ret = [];
  for (let i = 0; i < nums.length;) {
    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (sum === 0) {
        ret.push([nums[i], nums[l], nums[r]]);
        do {
          l++; // 过滤相同的l
        } while (l < r && nums[l - 1] === nums[l]);
        do {
          r--; // 过滤相同的r
        } while (l < r && nums[r + 1] === nums[r]);
      } else if (sum > 0) {
        r--;
      } else {
        l++;
      }
    }
    do {
      i++; // 过滤相同的i
    } while (i < nums.length && nums[i - 1] === nums[i]);
  }
  return ret;
};
// @lc code=end

