/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (preorder.length === 0 || inorder.length === 0) return null;
  var rootValue = preorder[0];
  var idx = inorder.indexOf(rootValue);
  var root = new TreeNode(rootValue);
  root.left = buildTree(preorder.slice(1, 1 + idx), inorder.slice(0, idx));
  root.right = buildTree(preorder.slice(1 + idx), inorder.slice(idx + 1));
  return root;
};