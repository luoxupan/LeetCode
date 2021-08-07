class Solution {
public:
    int minSubArrayLen(int s, vector<int>& nums) {
        int size = nums.size();
        int ret = 0; int l = 0; int r = 0;
        int sum = 0;
        while (r < size) {
            sum += nums[r];
            while (sum >= s) {
                int len = r - l + 1;
                ret = (ret == 0) ? len : min(len, ret);
                sum -= nums[l++];
            }
            r++;
        }
        return ret;
    }
};