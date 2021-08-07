/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
  var l = 0;
  var r = numbers.length - 1;
  while (l < r) {
    var mid = Math.floor((l + r) / 2);
    // 只要右边比中间大，那右边一定是有序数组
    if (numbers[mid] < numbers[r]) {
      r = mid;
    } else if (numbers[mid] > numbers[r]) {
      l = mid + 1;
    } else {
      // 去重
      r--;
    }
  }
  return numbers[l];
};
// 一种
// var minArray = function(numbers) {
//   var l = 0;
//   var r = 1;
//   while (r < numbers.length) {
//     if (numbers[l] <= numbers[r]) {
//       l++;
//       r++;
//     } else {
//       return numbers[r];
//     }
//   }
//   return numbers[0];
// };
