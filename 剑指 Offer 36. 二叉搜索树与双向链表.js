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
 * 
 * 1. 主要考虑在二叉输中序遍历的同时，构建这个链表
 * 2. 中序遍历，每当遍历到一个节点，则加入到新链表节点的尾部
 * 3. 因此，遍历过程中，需要保存一个链表尾指针
 * 4. 节点的left指针指向前一个节点，right指针指向下一个节点
 * 5. 最后再更新一下尾部节点和头节点的两个指针即可
 */
var head = null;
var tail = null;
var treeToDoublyList = function(root) {
  if (root === null) return root;
  head = null; // 全局需要重新设置为null，否则在第二行用例测试会出错
  tail = null; // 全局需要重新设置为null，否则在第二行用例测试会出错
  build(root);
  head.left = tail;
  tail.right = head;
  return head;
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
