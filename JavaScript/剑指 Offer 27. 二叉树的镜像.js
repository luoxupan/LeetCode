/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function(root) {
  dfs(root);
  return root;
};

var dfs = function(root) {
  if (root === null) return root;
  var n = root.left;
  root.left = root.right;
  root.right = n;
  dfs(root.left);
  dfs(root.right);
};
