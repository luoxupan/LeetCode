/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  var head = new ListNode(null);
  var p = head;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      p.next = l1;
      l1 = l1.next;
    } else if (l1.val > l2.val) {
      p.next = l2;
      l2 = l2.next;
    }
    p = p.next
  }
  while (l1) {
    p.next = l1;
    l1 = l1.next;
    p = p.next
  }
  while (l2) {
    p.next = l2;
    l2 = l2.next;
    p = p.next
  }
  return head.next;
};