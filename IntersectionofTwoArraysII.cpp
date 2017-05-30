class Solution {
public:
    vector<int> intersect(vector<int>& nums1, vector<int>& nums2) {
        vector<int> vec;
        map<int, int> m;
        for (int i = 0; i < nums1.size(); ++i) {
            if (m.count(nums1[i]) != 0) {
                m[nums1[i]]++;
            } else {
                m[nums1[i]] = 1;
            }
        }
        for (int j = 0; j < nums2.size(); ++j) {
            if (m.count(nums2[j]) != 0 && m[nums2[j]] > 0) {
                vec.push_back(nums2[j]);
                m[nums2[j]]--;
            }
        }
        return vec;
    }
};
