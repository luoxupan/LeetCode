/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
  var pFirst = head;
  var pSecend = head;
  while (k !== 0) {
    pFirst = pFirst.next;
    k--;
  }
  while (pFirst) {
    pFirst = pFirst.next;
    pSecend = pSecend.next;
  }
  return pSecend;
};
