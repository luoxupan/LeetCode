class Solution {
public:
    int majorityElement(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        return nums[nums.size() / 2];
    }
};


int majorityElement(int* nums, int numsSize) {
    int currentEle = nums[0];
    int count = 1;
    for (int i = 1; i < numsSize; ++i) {
        if (count == 0) {
            currentEle = nums[i];
            count = 1;
        } else if (currentEle == nums[i]) {
            count++;
        } else {
            count--;
        }
    }
    return currentEle;
}
