class Solution {
public:
    int findKthLargest(vector<int>& nums, int k) {
        int size = nums.size();
        int l = 0;
        int r = size - 1;
        while (l <= r) {
            int idx = KthFunc(nums, l, r);
            int len = size - idx;
            if (len == k) {
                return nums[idx];
            } else if (len > k) {
                l = idx + 1;
            } else {
                r = idx - 1;
            }
        }
        return 0;
    }
    
    int KthFunc(vector<int>& nums, int l, int r) {
        int cur = nums[l]; // 此函数生成的数组、左侧值<cur、右侧值>=cur
        while (l < r) {
            while (l < r && nums[r] >= cur) r--;
            if (l < r) {
                nums[l++] = nums[r];
            }
            while (l < r && nums[l] < cur) l++;
            if (l < r) {
                nums[r--] = nums[l];
            }
        }
        nums[l] = cur;
        return l;
    }
};