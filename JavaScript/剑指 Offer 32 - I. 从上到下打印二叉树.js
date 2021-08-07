/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function(root) {
  var ret = [];
  if (root === null) return ret;
  var cash = [root];
  while (cash.length > 0) {
    var top = cash.pop();
    top.left && cash.unshift(top.left);
    top.right && cash.unshift(top.right);
    ret.push(top.val);
  }
  return ret;
};