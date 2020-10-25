/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const cash = [];
  let idx_1 = 0;
  let idx_2 = 0;
  const len_1 = nums1.length;
  const len_2 = nums2.length;
  while (idx_1 < len_1 && idx_2 < len_2) {
    if (nums1[idx_1] <= nums2[idx_2]) {
      cash.push(nums1[idx_1]);
      idx_1++;
    } else {
      cash.push(nums2[idx_2]);
      idx_2++;
    }
  }
  while (idx_1 < len_1) {
    cash.push(nums1[idx_1]);
    idx_1++;
  }
  while (idx_2 < len_2) {
    cash.push(nums2[idx_2]);
    idx_2++;
  }
  const cash_len = cash.length;
  const even = cash_len % 2 === 0 ? true : false;
  const half = cash_len / 2;
  /**
   * Math.floor(2.4); => 2
   * Math.ceil(2.4); => 3
   */
  return even ? ((cash[half - 1] + cash[half]) / 2) : cash[Math.floor(half)];
};
// @lc code=end

