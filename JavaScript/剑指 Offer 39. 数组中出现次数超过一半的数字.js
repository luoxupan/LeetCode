/**
 * @param {number[]} nums
 * @return {number}
 * 解法：摩尔投票法
 * 可以理解成混战极限一换一，不同的两者一旦遇见就同归于尽，最后活下来的值都是相同的，即要求的结果
 * 时间O(n)，空间O(1)
 */
var majorityElement = function(nums) {
  var count = 0;
  var char = null;
  for (var i = 0;i < nums.length; ++i) {
    if (count === 0) {
      char = nums[i];
      count++;
    } else {
      count = char === nums[i] ? count + 1 : count - 1;
    }
  }
  return char;
};

