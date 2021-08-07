class Solution {
public:
    int missingNumber(vector<int>& nums) {
        int size = nums.size();
        sort(nums.begin(), nums.end());
        for (int i = 0; i < size; ++i) {
            if (i != nums[i]) {
                return i;
            }
        }
        return nums[size - 1] + 1;
    }
};
