class Solution {
public:
    int maxProfit(vector<int> &prices) {
        if (prices.size() == 0) {
            return 0;
        }
        int money=0,max=0;
        for (int i=0;i<prices.size()-1;++i) {
            prices[i]=prices[i+1]-prices[i];
        }
        for (int i=0;i<prices.size()-1;++i) {
            max+=prices[i];
            if (max<=0) {
                max=0;
            }
            money=money>max?money:max;
        }
        return money;
    }
};