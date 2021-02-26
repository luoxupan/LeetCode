/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var head = null;
var tail = null;
var treeToDoublyList = function(root) {
  if (root === null) return root;
  build(root);
  head.left = tail;
  tail.right = head;
  var _root = head;

  head = null; // 全局需要重新设置为null，否则在第二行用例测试会出错
  tail = null; // 全局需要重新设置为null，否则在第二行用例测试会出错
  return _root;
};

var build = function(root) {
  if (root) {
    build(root.left);
    if (head === null) {
      head = tail = root;
    } else {
      tail.right = root;
      root.left = tail;
      tail = root;
    }
    build(root.right);
  }
};
