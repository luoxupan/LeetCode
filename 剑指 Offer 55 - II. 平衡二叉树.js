/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  if (root === null) return true;
  var left = depth(root.left);
  var right = depth(root.right);
  if (Math.abs(left - right) > 1) {
    return false;
  } else {
    return isBalanced(root.left) && isBalanced(root.right);
  }
};

var depth = function(root) {
  if (root === null) return 0;
  return Math.max(depth(root.left), depth(root.right)) + 1;
};
