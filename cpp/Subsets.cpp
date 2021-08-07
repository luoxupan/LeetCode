class Solution {
public:
    vector<vector<int>> subsets(vector<int>& nums) {
        vector<vector<int>> list;
        vector<int> path;
        list.push_back(path);
        DFS(list, nums, path, 0);
        return list;
    }
    void DFS(vector<vector<int>>& list, vector<int>& nums, vector<int>& path,int start) {
        for (int i = start; i < nums.size(); ++i) {
            path.push_back(nums[i]);
            list.push_back(path);
            DFS(list, nums, path, i + 1);
            path.pop_back();
        }
    }
};
