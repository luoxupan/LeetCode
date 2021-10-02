输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的循环双向链表。要求不能创建任何新的节点，只能调整树中节点指针的指向。

 

为了让您更好地理解问题，以下面的二叉搜索树为例：

 
![image](https://assets.leetcode.com/uploads/2018/10/12/bstdlloriginalbst.png)


 

我们希望将这个二叉搜索树转化为双向循环链表。链表中的每个节点都有一个前驱和后继指针。对于双向循环链表，第一个节点的前驱是最后一个节点，最后一个节点的后继是第一个节点。

下图展示了上面的二叉搜索树转化成的链表。“head” 表示指向链表中有最小元素的节点。

 
![image](https://assets.leetcode.com/uploads/2018/10/12/bstdllreturndll.png)


 

特别地，我们希望可以就地完成转换操作。当转化完成以后，树中节点的左指针需要指向前驱，树中节点的右指针需要指向后继。还需要返回链表中的第一个节点的指针。


```js
/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 * 
 * 1. 主要考虑在二叉输中序遍历的同时，构建这个链表
 * 2. 中序遍历，每当遍历到一个节点，则加入到新链表节点的尾部
 * 3. 因此，遍历过程中，需要保存一个链表尾指针
 * 4. 节点的left指针指向前一个节点，right指针指向下一个节点
 * 5. 最后再更新一下尾部节点和头节点的两个指针即可
 */
var head = null;
var tail = null;
var treeToDoublyList = function(root) {
  if (root === null) return root;
  head = null; // 全局需要重新设置为null，否则在第二行用例测试会出错
  tail = null; // 全局需要重新设置为null，否则在第二行用例测试会出错
  build(root);
  head.left = tail;
  tail.right = head;
  return head;
};

var build = function(root) {
  if (root) {
    build(root.left);
    if (head === null) {
      head = tail = root;
    } else {
      tail.right = root;
      root.left = tail;
      tail = root;
    }
    build(root.right);
  }
};
```

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/er-cha-sou-suo-shu-yu-shuang-xiang-lian-biao-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
