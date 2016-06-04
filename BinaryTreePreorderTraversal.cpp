/**
 * Definition for binary tree
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
public:
    vector<int> preorderTraversal(TreeNode *root) {
        vector<int> v;
        if (root==NULL) {
            return v;
        }
        stack<TreeNode*> s;
        TreeNode* p=root;
        while (!s.empty()||p) {
            while (p) {
                v.push_back(p->val);
                s.push(p);
                p=p->left;
            }
            if (!s.empty()) {
                p=s.top();
                s.pop();
                p=p->right;
            }
        }
        return v;
    }
};