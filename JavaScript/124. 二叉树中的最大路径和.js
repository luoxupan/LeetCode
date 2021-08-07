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
 * @return {number}
 */

/**
 * 解题思路：
 * 按照题意：一颗三个节点的小树的结果只可能有如下6种情况：
 * 根 + 左 + 右
 * 根 + 左
 * 根 + 右
 * 根
 * 左
 * 右
 * 然后使用递归，选择小树的最大路径和的情况，拼凑成一颗大树
 */
var max = Number.MIN_SAFE_INTEGER;
var maxPathSum = function(root) {
  max = Number.MIN_SAFE_INTEGER;
  func(root);
  return max;
};
 
var func = function(root) {
  if (root === null) return 0;
  // 如果子树路径和为负则应当置0表示最大路径不包含子树    
  var left  =Math.max(0, func(root.left));
  var right = Math.max(0, func(root.right));
  // 判断在该节点包含左右子树的路径和是否大于当前最大路径和
  max = Math.max(max, left + right + root.val);
  // 选择左子树/右子树+当前节点
  return Math.max(left, right) + root.val;
};
 