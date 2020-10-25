/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
var addTwoNumbers = function(l1, l2) {
  let ret = new ListNode(null, null);
  let cur = ret;
  let jinwei = 0;
  while (l1 && l2) {
    const value = l1.val + l2.val + jinwei;
    const isJW = value >= 10 ? true : false;
    isJW ? (jinwei = 1) : (jinwei = 0);
    const node = new ListNode(isJW ? value - 10 : value, null);
    cur.next = node;
    cur = cur.next;
    l1 = l1.next;
    l2 = l2.next;
  }
  function diedai(list) {
    while (list) {
      const value = list.val + jinwei;
      const isJW = value >= 10 ? true : false;
      isJW ? (jinwei = 1) : (jinwei = 0);
      const node = new ListNode(isJW ? value - 10 : value, null);
      cur.next = node;
      cur = cur.next;
      list = list.next;
    }
  }
  diedai(l1);
  diedai(l2);
  if (jinwei > 0) {
    const node = new ListNode(jinwei, null);
    cur.next = node;
    cur = cur.next;
  }
  return ret.next;
};
// @lc code=end

