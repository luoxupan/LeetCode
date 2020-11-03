/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  const H = new ListNode('hedd', head);
  let p = H;
  let cur = H;
  while (n > 0) {
    p = p.next;
    n--;
  }
  while (p && p.next) {
    p = p.next;
    cur = cur.next;
  }
  if (cur && cur.next) {
    cur.next = cur.next.next;
  }
  return H.next;
};
// @lc code=end

