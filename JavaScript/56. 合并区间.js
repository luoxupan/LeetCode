/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
  if (intervals.length < 2) return intervals;
  var ret = [];
  var i = 0;
  var j = 1;
  intervals = intervals.sort((x, y) => x[0] - y[0]);
  while (i < j && j < intervals.length) {
    if (intervals[j][0] >= intervals[i][0] && intervals[j][1] <= intervals[i][1]) {
      intervals[j][0] = intervals[i][0];
      intervals[j][1] = intervals[i][1];
    } else if (intervals[j][0] >= intervals[i][0] && intervals[j][0] <= intervals[i][1]) {
      intervals[j][0] = intervals[i][0];
    } else {
      ret.push(intervals[i]);
    }
    if (j === intervals.length - 1) {
      ret.push(intervals[j]);
    }
    i++;
    j++;
  }
  return ret;
};