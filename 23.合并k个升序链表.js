/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  let header = new ListNode('header', null);
  let p = header;
  while (lists.length > 0) {
    let curMinNode = null;
    let curIndex = null;
    for (let i = 0; i < lists.length; ++i) {
      let cur = lists[i];
      if (cur) {
        if (curMinNode === null) {
          curMinNode = cur;
          curIndex = i;
        } 
        if (curMinNode.val > cur.val) {
          curMinNode = cur;
          curIndex = i;
        }
      } else {
        lists.splice(i, 1); 
        i--;
      }
    }
    if (curMinNode !== null) {
      p.next = curMinNode
      p = p.next;
      lists[curIndex] = curMinNode.next;
      curMinNode = null;
      curIndex = null;
    }
  }
  return header.next;
};
// @lc code=end

