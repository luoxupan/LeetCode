/**
 * @param {number[]} height
 * @return {number}
 */
 var trap = function(height) {
  if (height.length === 0) return 0;
  var contents = 0;
  var left = 0;
  var right = height.length - 1;
  while (left <= right && height[left] === 0) {
    left++;
  }
  while (left <= right && height[right] === 0) {
    right--;
  }
  var lastHeight = 0;
  while (left <= right) {
    var curLeftvalue = height[left];
    var curRightvalue = height[right];
    var curHeight = Math.min(curLeftvalue, curRightvalue);
    var temp = (right - left + 1) * (curHeight - lastHeight);
    contents += temp;
    lastHeight = curHeight;
    if (curLeftvalue <= curRightvalue) {
      while (left <= right && height[left] <= curLeftvalue) {
        left++;
      }
    }
    if (curLeftvalue >= curRightvalue) {
      while (left <= right && height[right] <= curRightvalue) {
        right--;
      }
    }
  }
  return contents - height.reduce((x, y) => x + y);
};
