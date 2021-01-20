/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (root === null) return [];
  var cash = [[root]];
  var ret = [];
  var level = 1;
  while (cash.length > 0) {
    var top = cash.pop();
    var array = [];
    var nei = [];
    for (var i = 0; i < top.length; ++i) {
      if (level % 2 === 1) {
        array.push(top[i].val);
      } else {
        array.unshift(top[i].val);
      }
      top[i].left && nei.push(top[i].left);
      top[i].right && nei.push(top[i].right);
    }
    level++;
    nei.length > 0 && cash.push(nei);
    ret.push(array);
  }
  return ret;
};
