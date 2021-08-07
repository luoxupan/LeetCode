/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(head) {
  var cash = [];
  dfs(head, cash);
  return cash;
};

var dfs = function(head, cash) {
  if (head === null) return;
  dfs(head.next, cash);
  cash.push(head.val);
};
