/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  var stack = [];
  while (head) {
    stack.push(head);
    head = head.next;
  }
  var pH = new ListNode(null);
  var p = pH;
  while (stack.length > 0) {
    var cur = stack.pop();
    cur.next = null;
    p.next = cur;
    p = cur;
  }
  return pH.next;
};