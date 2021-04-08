/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
 var kthSmallest = function(root, k) {
  var nodes = [];
  dfs(root, nodes);
  return nodes[k - 1];
};

var dfs = function(root, nodes) {
  if (root === null) return;
  if (root.left) dfs(root.left, nodes);
  nodes.push(root.val);
  if (root.right) dfs(root.right, nodes);
};
