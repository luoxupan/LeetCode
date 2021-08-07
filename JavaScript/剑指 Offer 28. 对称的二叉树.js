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
var isSymmetric = function(root) {
  if (root === null) {
    return true;
  }
  return dfs(root.left, root.right);
};

var dfs = function(node_1, node_2) {
  if (node_1 === null && node_2 === null) {
    return true;
  }
  if (node_1 === null || node_2 === null) {
    return false;
  }
  return (node_1.val === node_2.val) && dfs(node_1.left, node_2.right) && dfs(node_1.right, node_2.left);
};
