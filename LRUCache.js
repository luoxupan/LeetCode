/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.list = [];       // 当做链表使用, 存储key
    this.map = new Map(); // 存储key和value
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.map.has(key)) {
        let value = this.map.get(key);
        let index = this.list.indexOf(key);
        this.list.splice(index, 1);
        this.list.unshift(key);
        return value;
    } else {
        return -1;
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.map.has(key)) {
        let index = this.list.indexOf(key);
        this.list.splice(index, 1);
    }
    if (this.list.length >= this.capacity) {
        let k = this.list.pop();
        this.map.delete(k);
    }
    this.list.unshift(key);
    this.map.set(key, value);
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */