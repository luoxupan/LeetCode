class Solution {
public:
    vector<vector<int>> permute(vector<int>& nums) {
        vector<vector<int>> list;
        vector<int> path;
        vector<bool> mark(nums.size(), false); // 根据角标, 标记元素是否使用
        DFS(list, nums, path, mark);
        return list;
    }
    void DFS(vector<vector<int>>& list, vector<int>& nums, vector<int>& path, vector<bool>& mark) {
        if (nums.size() == path.size()) {
            list.push_back(path);
        } else {
            for (int i = 0; i < nums.size(); ++i) {
                if (!mark[i]) { // 如果元素还未使用
                    path.push_back(nums[i]);
                    mark[i] = true;
                    DFS(list, nums, path, mark);
                    path.pop_back();
                    mark[i] = false;
                }
            }
        }
    }
};