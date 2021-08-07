/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
public:
    vector<vector<int>> levelOrder(TreeNode* root) {
        vector<vector<int>> ret;
        if (root == NULL) return ret;
        
        vector<vector<TreeNode *>> cash;
        vector<TreeNode *> init(1, root);
        cash.push_back(init);
        BFS(cash, init);
        
        int len = cash.size();
        for (int i = 0; i < len; ++i) {
            vector<int> childs;
            vector<TreeNode *> tmp = cash[i];
            for (int j = 0; j < tmp.size(); ++j) {
                childs.push_back(tmp[j]->val);
            }
            ret.push_back(childs);
        }
        return ret;
    }
    
    void BFS(vector<vector<TreeNode *>> &cash, vector<TreeNode *> level) {
        int len = level.size();
        if (len == 0) return;
        vector<TreeNode *> childs;
        for (int i = 0; i < len; ++i) {
            if (level[i]->left) childs.push_back(level[i]->left);
            if (level[i]->right) childs.push_back(level[i]->right);
        }
        if (childs.size() > 0) cash.push_back(childs);
        BFS(cash, childs);
    }
};
