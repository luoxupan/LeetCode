请实现 copyRandomList 函数，复制一个复杂链表。在复杂链表中，每个节点除了有一个 next 指针指向下一个节点，还有一个 random 指针指向链表中的任意节点或者 null。

 

示例 1：

![image](https://user-images.githubusercontent.com/7278711/109242675-828fae00-7816-11eb-8565-c686023b937e.png)


输入：head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
输出：[[7,null],[13,0],[11,4],[10,2],[1,0]]

```js
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
```

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/fu-za-lian-biao-de-fu-zhi-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
