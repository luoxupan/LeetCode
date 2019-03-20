class MinStack {
public:
    /** initialize your data structure here. */
    vector<int> _stack;
    vector<int> _minstack;
    
    MinStack() { }
    
    void push(int x) {
        int curMin;
        if (_stack.size() == 0) {
            curMin = x;
        } else {
            int topIndex = _minstack.size() - 1;
            int stackMin = _minstack[topIndex];
            curMin = (stackMin > x) ? x : stackMin;
        }
        _stack.push_back(x);
        _minstack.push_back(curMin);
    }
    
    void pop() {
        _stack.pop_back();
        _minstack.pop_back();
    }
    
    int top() {
        int topIndex = _stack.size() - 1;
        return _stack[topIndex];
    }
    
    int getMin() {
        int topIndex = _minstack.size() - 1;
        return _minstack[topIndex];
    }
};

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = new MinStack();
 * obj.push(x);
 * obj.pop();
 * int param_3 = obj.top();
 * int param_4 = obj.getMin();
 */