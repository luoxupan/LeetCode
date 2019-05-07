class Solution {
public:
    vector<string> generateParenthesis(int n) {
        vector<string> ret;
        traceBack(ret, "", 0, 0, n);
        return ret;
    }
    
    void traceBack(vector<string> &ret, string str, int open, int close, int n) {
        if (str.size() == (2 * n)) {
            ret.push_back(str);
        } else {
            if (open < n) {
                traceBack(ret, str + '(', open + 1, close, n);
            }
            if (close < open) {
                traceBack(ret, str + ')', open, close + 1, n);
            }
        }
    }
};
