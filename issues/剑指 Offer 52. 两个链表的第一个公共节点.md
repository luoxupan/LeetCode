输入两个链表，找出它们的第一个公共节点。

如下面的两个链表：
![image](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/14/160_statement.png)


在节点 c1 开始相交。



示例 1：
 ![image](https://assets.leetcode.com/uploads/2018/12/13/160_example_1.png)
```
输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
输出：Reference of the node with value = 8
输入解释：相交节点的值为 8 （注意，如果两个列表相交则不能为 0）。从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,0,1,8,4,5]。在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。
```

```js
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
```

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/liang-ge-lian-biao-de-di-yi-ge-gong-gong-jie-dian-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
