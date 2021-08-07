/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
  var map = {};
  for (var i = 0; i < strs.length; ++i) {
    var temp = strs[i].split('').sort();
    var array = map[temp] || [];
    array.push(strs[i]);
    map[temp] = array;
  }
  return Object.keys(map).map((item) => map[item]);
};