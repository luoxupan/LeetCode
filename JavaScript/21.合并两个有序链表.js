/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  // 输入：1->2->4, 1->3->4
  // 输出：1->1->2->3->4->4
  const head = new ListNode();
  let p1 = l1;
  let p2 = l2;
  let cur = head;
  while (p1 && p2) {
      if (p1.val < p2.val) {
          cur.next = p1;
          cur = cur.next;
          p1 = p1.next;
      } else {
          cur.next = p2;
          cur = cur.next;
          p2 = p2.next;
      }
  }
  while (p1) {
      cur.next = p1;
      cur = cur.next;
      p1 = p1.next;
  }
  while (p2) {
      cur.next = p2;
          cur = cur.next;
          p2 = p2.next;
  }
  return head.next;
};
// @lc code=end

