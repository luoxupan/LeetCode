请实现两个函数，分别用来序列化和反序列化二叉树。

示例: 
```
你可以将以下二叉树：

    1
   / \
  2   3
     / \
    4   5

序列化为 "[1,2,3,null,null,4,5]"
```


```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  if (!root) return '[]';
  var cash = [];
  var queue = [root];
  while (queue.length > 0) {
    var curNode = queue.shift();
    cash.push(curNode ? curNode.val : null);
    curNode && queue.push(curNode.left || null);
    curNode && queue.push(curNode.right || null);
  }
  return JSON.stringify(cash);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  data = JSON.parse(data);
  var length = data.length;
  if (length === 0) return null;
  var root = new TreeNode(data[0]);
  var father = 0;
  var left = 1;
  var right = 2;
  var temp = [root];
  while (left < length || right < length) {
    if (left < length && data[left] !== null) {
      var node = new TreeNode(data[left]);
      temp[father].left = node;
      temp.push(node);
    }
    if (right < length && data[right] !== null) {
      var node = new TreeNode(data[right]);
      temp[father].right = node;
      temp.push(node);
    }
    left = right + 1;
    right = left + 1;
    father++;
  }
  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
```

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/xu-lie-hua-er-cha-shu-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
