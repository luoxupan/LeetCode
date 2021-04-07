/**
 * @param {number[]} nums
 * @return {number[][]}
 * 
 * 直接遍历，遇到一个数就把所有子集加上该数组成新的子集，遍历完毕即是所有子集
 */
 var subsets = function(nums) {
  var res = [[]];
  for (var i = 0; i < nums.length; ++i) {
    var length = res.length;
    for (var j = 0; j < length; ++j) {
      res.push([...res[j], nums[i]]);
    }
  }
  return res;
};