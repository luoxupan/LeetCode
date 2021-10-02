[https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/](https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/)

```js
var CQueue = function() {
  this.s_01 = [];
  this.s_02 = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
  this.s_01.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
  if (this.s_02.length === 0) {
    while (this.s_01.length > 0) {
      this.s_02.push(this.s_01.pop())
    }
  }
  return this.s_02.length > 0 ? this.s_02.pop() : -1;
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */

```
