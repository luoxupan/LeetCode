class Solution {
public:
    int findUnsortedSubarray(vector<int>& nums) {
        int len = nums.size();
        if (len == 0) return 0;
        vector<int> cp_nums = nums;
        sort(cp_nums.begin(), cp_nums.end(), cmp);
        int i = 0;
        while (i < len) {
            if (nums[i] == cp_nums[i]) {
                i++;
            } else {
                break;
            }
        }
        if (i == len)  return 0;
        
        int j = len - 1;
        while (j >= 0) {
            if (nums[j] == cp_nums[j]) {
                j--;
            } else {
                break;
            }
        }
        return 1 + j - i;
    }
    
    static int cmp(int a, int b) {
       return a < b;
    }
};