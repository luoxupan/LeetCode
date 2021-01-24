/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function(nums) {
  var ret = [];
  for (var i = 0; i < nums.length; ++i) {
    var index = ret.indexOf(nums[i]);
    if (index === -1) {
      ret.push(nums[i]);
    } else {
      ret.splice(index, 1);
    }
  }
  return ret;
};
