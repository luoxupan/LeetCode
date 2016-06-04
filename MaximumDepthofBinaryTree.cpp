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
    int maxDepth(TreeNode *root) {
        int a=0;
        if (root) {
            int c=maxDepth(root->left);
            int d=maxDepth(root->right);
            a=c>d?c+1:d+1;
        }
        return a;
    }
};