class Solution {
public:
    int findDuplicate(vector<int>& nums) {
        int ret;
        int len = nums.size();
        vector<bool> mark(len, false);
        for (int i = 0; i < len; ++i) {
            if (mark[nums[i]]) {
                return nums[i];
            } else {
                mark[nums[i]] = true;
            }
        }
        return ret;
    }
};
