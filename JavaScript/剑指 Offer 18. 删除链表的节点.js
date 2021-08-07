/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function(head, val) {
  var h = new ListNode(null);
  h.next = head;
  var p = h;
  while (p.next && p.next.val !== val) {
    p = p.next;
  }
  if (p.next && p.next.val === val) {
    p.next = p.next.next;
  }
  return h.next;
};
