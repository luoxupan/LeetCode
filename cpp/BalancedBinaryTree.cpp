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
    int deep(TreeNode *root) {
        int i,j;
        if(!root) {
            return 0;
        }
        i = deep(root->left);
        j = deep(root->right);
        return j>i?j+1:i+1;
    }
    bool isBalanced(TreeNode *root) {
        if (root == NULL) {
            return true;
        }
        int l = deep(root->left);
        int r = deep(root->right);
        int num = abs(l-r);
        return num<=1&&isBalanced(root->left)&&isBalanced(root->right);
    }
};