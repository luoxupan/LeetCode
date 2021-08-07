class Solution {
public:
    vector<int> intersection(vector<int>& nums1, vector<int>& nums2) {
        vector<int> v;
        map<int, int> m;
        for (int i = 0; i < nums1.size(); ++i) {
            m[nums1[i]] = i;
        }
        vector<int>::iterator ret;
        for (int j = 0; j < nums2.size(); ++j) {
            if (m.count(nums2[j]) != 0) {
                ret = find(v.begin(), v.end(), nums2[j]);
                if (ret == v.end()) {
                    v.push_back(nums2[j]);
                }
            }
        }
        return v;
    }
};
