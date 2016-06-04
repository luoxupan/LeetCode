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
    
    vector<int> inorderTraversal(TreeNode *root) {
        vector<int> ve;
        stack<TreeNode *> s;
        TreeNode *p = root;
        while (p != NULL || !s.empty()) {
            while (p) {
                s.push(p);
                p=p->left;
            }
            if (!s.empty()) {
                p=s.top();
                ve.push_back(p->val);
                s.pop();
                p=p->right;
            }
        }
        
        return ve;
    }
};