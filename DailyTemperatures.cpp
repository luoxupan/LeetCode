class Solution {
public:
    vector<int> dailyTemperatures(vector<int>& T) {
        int len = T.size();
        vector<int> ret(len);
        stack<pair<int, int>> stk;
        for (int i = 0; i < len; ++i) {
            while (!stk.empty() && stk.top().second < T[i]) {
                ret[stk.top().first] = i - stk.top().first;
                stk.pop();
            }
            stk.push(pair(i, T[i]));
        }
        while (!stk.empty()) {
            ret[stk.top().first] = 0;
            stk.pop();
        }
        return ret;
    }
};
