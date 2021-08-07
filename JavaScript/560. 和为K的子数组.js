/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var subarraySum = function(nums, k) {
  var sum = 0;
  var ret = 0;
  var map = new Map(); // 利用哈希表实现线性寻找
  map.set(0, 1);
  for (var i = 0; i < nums.length; ++i) {
    sum += nums[i];
    if (map.has(sum - k)) {
      // 表示连续子数组减去连续子数组，必定为连续子数组
      ret += map.get(sum - k) || 0;
    }
    map.set(sum, (map.get(sum) || 0) + 1);
  }
  return ret;
};