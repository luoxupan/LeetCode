/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let l = 0;
  let r = height.length - 1;
  let ret = 0;
  while (l < r) {
    const count = (r - l) * Math.min(height[l], height[r]);
    ret = ret > count ? ret : count;
    if (height[l] > height[r]) {
      r--;
    } else {
      l++;
    }
  }
  return ret;
};
// @lc code=end

