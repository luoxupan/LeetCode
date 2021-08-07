/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
  return dfs(root, p, q);
};

var dfs = function(root, p, q) {
  if (root === null || root === p || root === q) return root;
  var left = dfs(root.left, p, q);
  var right = dfs(root.right, p, q);
  if (left && right) return root;
  if (left) return left;
  if (right) return right;
};
