class Solution {
public:
    int maxProfit(vector<int> &prices) {
        int mon = 0;
        for (int i=1; i<prices.size(); ++i) {
            if (prices[i]>prices[i-1]) {
                mon+=prices[i]-prices[i-1];
            }
        }
        return mon;
    }
};