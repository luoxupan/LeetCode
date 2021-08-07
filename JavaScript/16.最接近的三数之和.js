/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums = nums.sort((n, m) => n - m);
    // [-4, -1, 1, 2]
    let ret = null;
    for (let i = 0; i < nums.length; ++i) {
        let l = i + 1;
        let r = nums.length - 1;
        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r];
            if (ret === null || Math.abs(sum - target) < Math.abs(ret - target)) {
                ret = sum;
                if (sum > target) {
                    r--;
                } else {
                    l++;
                }
            } else if (sum > target) {
                r--;
            } else {
                l++;
            }
        }
    }
    return ret;
};
// @lc code=end

