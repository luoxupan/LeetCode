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
  while (cash.length > 0) {
    var top = cash.pop();
    var array = [];
    var nei = [];
    for (var i = 0; i < top.length; ++i) {
      array.push(top[i].val);
      top[i].left && nei.push(top[i].left);
      top[i].right && nei.push(top[i].right);
    }
    nei.length > 0 && cash.unshift(nei);
    ret.push(array);
  }
  return ret;
};
