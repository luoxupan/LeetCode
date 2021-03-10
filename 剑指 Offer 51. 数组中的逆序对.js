/**
 * @param {number[]} nums
 * @return {number}
 */
var count = 0;
var reversePairs = function(nums) {
  count = 0;
  mergesort(nums, 0, nums.length - 1);
  return count;
};

function mergesort(array, left, right) {
  if (left < right) {
    var mid = Math.floor((left + right) / 2);
    mergesort(array, left, mid); // 左边有序
    mergesort(array, mid + 1, right); // 右边有序
    mergearray(array, left, mid, right, []); // 再将二个有序数列合并
  }
}

// 将有二个有序数列array[left...mid]和array[mid...right]合并。
function mergearray(array, left, mid, right, temp) {
  var i = left;
  var j = mid + 1;
  var p = 0;
  while (i <= mid && j <= right) {
    if (array[i] <= array[j]) {
      temp[p++] = array[i++];
      // 当左边需要弹出去时，更新逆序对数量
      count += j - 1 - mid;
    } else {
      temp[p++] = array[j++];
    }
  }
  while (i <= mid) {
    count += j - 1 - mid;
    temp[p++] = array[i++];
  }
  while (j <= right) {
    temp[p++] = array[j++];
  }
  for (i = 0; i < p; i++) {
    array[left + i] = temp[i];
  }
}
