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
    vector<int> postorderTraversal(TreeNode *root) {
        vector<int> v;
        if (root==NULL) {
            return v;
        }
        stack<TreeNode*> s1,s2;
        TreeNode* p;
        s1.push(root);
        while (!s1.empty()) {
            p=s1.top();
            s2.push(p);
            s1.pop();
            if (p->left) {
                s1.push(p->left);
            }
            if (p->right) {
                s1.push(p->right);
            }
        }
        while (!s2.empty()) {
            p=s2.top();
            v.push_back(p->val);
            s2.pop();
        }
        return v;
    }
};