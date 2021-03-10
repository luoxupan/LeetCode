var CQueue = function() {
  this.s_1 = [];
  this.s_2 = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
  this.s_1.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
  if (this.s_2.length === 0 && this.s_1.length > 0) {
    while (this.s_1.length > 0) {
      this.s_2.push(this.s_1.pop());
    }
  }
  return this.s_2.length === 0 ? -1 : this.s_2.pop();
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */