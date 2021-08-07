class Solution {
public:
    int firstMissingPositive(vector<int>& nums) {
        int len = nums.size();
        if (len == 0) return 1;
        int size = len + 2;
        vector<bool> n(size, false);
        for (int i = 0; i < len; i++) {
            if (nums[i] > 0 && nums[i] <= len) n[nums[i]] = true;
        }
        for (int i = 1; i < size; i++) {
            if (!n[i]) return i;
        }
        return -1;
    }
};