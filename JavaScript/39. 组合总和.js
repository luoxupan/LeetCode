/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum = function(candidates, target) {
  candidates = candidates.sort((x, y) => x - y);
  var array = [];
  find(candidates, target, array, [], 0);
  return array;
};

var find = function(candidates, target, array, path, idx) {
  if (target === 0) {
    array.push(path.slice());
  } else {
    for (var i = idx; i < candidates.length && candidates[i] <= target; ++i) {
      path.push(candidates[i]);
      find(candidates, target - candidates[i], array, path, i);
      path.pop();
    }
  }
};