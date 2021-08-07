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
    bool isSymmetric(TreeNode *root) {
        if (!root) {
            return true;
        }
        return isSymmetric(root->left, root->right);
    }
    bool isSymmetric(TreeNode* le,TreeNode* ri) {
        if (!le&&!ri) {
            return true;
        }
        if ((!le&&ri)||(le&&!ri)||(le->val!=ri->val)) {
            return false;
        }
        return isSymmetric(le->right, ri->left)&&isSymmetric(le->left, ri->right);
    }
};