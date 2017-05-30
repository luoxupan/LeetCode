class Solution {
public:
    bool containsNearbyDuplicate(vector<int>& nums, int k) {
        map<int, int> v_k;
        if (!nums.empty()) {
            for (int i = 0; i < nums.size(); ++i) {
                if (v_k.count(nums[i]) != 0) {
                    if (abs(i - v_k[nums[i]]) <= k) {
                        return true;
                    } else {
                        v_k[nums[i]] = i;
                    }
                } else {
                    v_k[nums[i]] = i;
                }
            }
        }
        return false;
    }
};
