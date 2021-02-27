/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  var map = new Map();
  var cur = head;
  while (cur !== null) {
    map.set(cur, new Node(cur.val, null, null));
    cur = cur.next;
  }
  cur = head;
  while (cur !== null) {
    map.get(cur).next = cur.next && map.get(cur.next) || null;
    map.get(cur).random = cur.random && map.get(cur.random) || null;
    cur = cur.next;
  }
  return map.get(head);
};
