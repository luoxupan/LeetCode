/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; ++i) {
        let idx = nums.lastIndexOf(target - nums[i]);
        if (idx !== -1 && idx !== i) {
            return [i, idx];
        }
    }
    return [];
};
