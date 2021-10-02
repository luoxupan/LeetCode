输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历结果。如果是则返回 true，否则返回 false。假设输入的数组的任意两个数字都互不相同。

 

参考以下这颗二叉搜索树：
```
     5
    / \
   2   6
  / \
 1   3
```
示例 1：
```
输入: [1,6,3,2,5]
输出: false
```
示例 2：
```
输入: [1,3,2,6,5]
输出: true
```

```js
/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function(postorder) {
  if (postorder.length <= 2) return true;
  // 要点：二叉搜索树中根节点的值大于左子树中的任何一个节点的值，小于右子树中任何一个节点的值，子树也是
  return verify(postorder, 0, postorder.length - 1);
};

var verify = function(postorder, left, right) {
  if (left >= right) return true; // 当前区域不合法的时候直接返回true就好
  var rootValue = postorder[right]; // 当前根节点
  var p = left;
  while (p < right && postorder[p] < rootValue) {
    p++;
    // 从当前区域找到第一个大于根节点的，说明后续区域数值都在右子树中
  }
  for (var i = p; i < right; i++) {
    if (postorder[i] < rootValue) return false;
    // 进行判断后续的区域是否所有的值都是大于当前的根节点，如果出现小于的值就直接返回false
  }
  // 当前树没问题就检查左右子树
  return verify(postorder, left, p - 1) && verify(postorder, p, right - 1);
};
```

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-hou-xu-bian-li-xu-lie-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
