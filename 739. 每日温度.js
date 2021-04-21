/**
 * @param {number[]} T
 * @return {number[]}
 */
 var dailyTemperatures = function(T) {
  var array = new Array(T.length).fill(0);
  for (var i = 0; i < T.length; ++i) {
    for (var j = i + 1; j < T.length; ++j) {
      if (T[j] > T[i]) {
        array[i] = j - i;
        break;
      }
    }
  }
  return array;
};