/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  var ret = [];
  dfs(root, ret, [], sum);
  return ret;
};

var dfs = function(node, ret, path, target) {
  if (!node) return;
  path.push(node.val);
  target -= node.val;
  if (target === 0 && !node.left && !node.right) {
    ret.push(path.slice());
  } else {
    dfs(node.left, ret, path, target);
    dfs(node.right, ret, path, target);
  }
  path.pop();
};