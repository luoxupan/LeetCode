请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。

 

例如:
给定二叉树: [3,9,20,null,null,15,7],
```
    3
   / \
  9  20
    /  \
   15   7
```
返回其层次遍历结果：
```
[
  [3],
  [20,9],
  [15,7]
]
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
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (root === null) return [];
  var cash = [[root]];
  var ret = [];
  var level = 1;
  while (cash.length > 0) {
    var top = cash.pop();
    var array = [];
    var nei = [];
    for (var i = 0; i < top.length; ++i) {
      if (level % 2 === 1) {
        array.push(top[i].val);
      } else {
        array.unshift(top[i].val);
      }
      top[i].left && nei.push(top[i].left);
      top[i].right && nei.push(top[i].right);
    }
    level++;
    nei.length > 0 && cash.push(nei);
    ret.push(array);
  }
  return ret;
};
```

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-iii-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
