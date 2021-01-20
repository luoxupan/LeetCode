/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = [];
  this.minStack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  var len = this.minStack.length - 1
  var curMin = len >= 0 && this.minStack[len] < x ? this.minStack[len] : x;
  this.stack.push(x);
  this.minStack.push(curMin);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.minStack.pop();
  return this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  var len = this.stack.length;
  return len > 0 ? this.stack[len - 1] : undefined;
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
  var len = this.minStack.length;
  return len > 0 ? this.minStack[len - 1] : undefined;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */