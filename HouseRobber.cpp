/**
* f(0) = nums[0];
* f(1) = max(num[0], num[1]);
* f(k) = max(f(k-2) + nums[k], f(k-1));
**/
class Solution {
public:
    int rob(vector<int>& nums) {
        int size = nums.size();
        if (size == 0) return 0;
        if (size == 1) return nums[0];
        if (size == 2) return max(nums[0], nums[1]);
        
        vector<int> dp(size, 0);
        dp[0] = nums[0];
        dp[1] = max(nums[0], nums[1]);
        for (int i = 2; i < size; ++i) {
            dp[i] = max(dp[i - 2] + nums[i], dp[i - 1]);
        }
        return dp[size -1];
    }
    
    int max(int x, int y) {
        return (x > y) ? x : y;
    }
};
