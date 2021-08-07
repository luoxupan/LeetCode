/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 * 
 * 设交集链表长c,链表1除交集的长度为a，链表2除交集的长度为b，有
 * a + c + b = b + c + a
 */
var getIntersectionNode = function(headA, headB) {
  var h1 = headA;
  var h2 = headB;
  while (h1 !== h2) {
    h1 = h1 === null ? headB : h1.next;
    h2 = h2 === null ? headA : h2.next;
  }
  return h1;
};