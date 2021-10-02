输入一棵二叉树的根节点，求该树的深度。从根节点到叶节点依次经过的节点（含根、叶节点）形成树的一条路径，最长路径的长度为树的深度。

例如：

给定二叉树 [3,9,20,null,null,15,7]，
```
    3
   / \
  9  20
    /  \
   15   7
```
返回它的最大深度 3 。
```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 * 按层次遍历
 */
var maxDepth = function(root) {
  if (root === null) return 0;
  var depth = 0;
  var queue = [root];
  while (queue.length > 0) {
    var size = queue.length;
    for (var i = 0; i < size; ++i) {
      var node = queue.shift();
      if (node.left) queue.push(node.left); 
      if (node.right) queue.push(node.right); 
    }
    depth++;
  }
  return depth;
};
```
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/er-cha-shu-de-shen-du-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

### 扩展

> 当这棵树的子节点是数组的时候如何获取这棵树的深度
```js
var tree = {
  name: 'root',
  children: [
    {
      name: '叶子1-1',
      children: [{
        name: '叶子1-2',
        children: [{
          name: '叶子1-3',
          children: [{
            name: '叶子1-4',
            children: [{
              name: '叶子1-5'
            }]
          }]
        }]
      }]
    },
    { name: '叶子2-1' },
    {
      name: '叶子3-1',
      children: [{
        name: '叶子3-2',
        children: [{
          name: '叶子3-3'
        }]
      }]
    }
  ]
}
```
```js
function maxDepth(root) {
  if (root === null) return 0;
  var depth = 0;
  var queue = [root];
  while (queue.length > 0) {
    var size = queue.length;
    for (var i = 0; i < size; ++i) {
      var node = queue.shift();
      if (node.children) {
        queue = queue.concat(node.children);
      }
    }
    depth++;
  }
  return depth;
}
```

