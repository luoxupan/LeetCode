/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  const ret = [];
  nums = nums.sort((n, m) => n - m);
  const numslen = nums.length;
  // 转换成3数之和
  for (let i = 0; i < numslen;) {
    for (let j = i + 1; j < numslen;) {
      let l = j + 1;
      let r = numslen - 1;
      while (l < r) {
        const sum = nums[i] + nums[j] + nums[l] + nums[r];
        if (sum === target) {
          ret.push([nums[i], nums[j], nums[l], nums[r]]);
          do {
            l++;
          } while (l < r && nums[l - 1] === nums[l]);
          do {
            r--;
          } while (l < r && nums[r + 1] === nums[r]);
        } else if (sum > target) {
          r--;
        } else {
          l++;
        }
      }
      do {
        j++;
      } while (j < numslen && nums[j - 1] === nums[j]);
    }
    do {
      i++;
    } while (i < numslen && nums[i - 1] === nums[i]);
  }
  return ret;
};
// @lc code=end

