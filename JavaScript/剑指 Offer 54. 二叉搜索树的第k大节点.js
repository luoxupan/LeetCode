/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function(root, k) {
  var queue = [];
  front(root, queue);
  return queue[k - 1];
};

var front = function(root, queue) {
  // 前序遍历
  if (root === null) return queue;
  if (root.left) front(root.left, queue);
  queue.unshift(root.val);
  if (root.right) front(root.right, queue);
};
