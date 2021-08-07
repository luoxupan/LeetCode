/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  if (k === 0) return [];
  var l = 0;
  var r = k - 1;
  var length = nums.length;
  var ret = [];
  while (r < length) {
    ret.push(Math.max(...nums.slice(l, r + 1)));
    l++;
    r++;
  }
  return ret;
};
