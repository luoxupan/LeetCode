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
    int rob(TreeNode* root) {
        pair<int, int> ret = DFS(root);
        return max(ret.first, ret.second);
    }
    pair<int, int> DFS(TreeNode* root) {
        if (root == NULL) return {0, 0};
        pair<int, int> left = DFS(root->left);
        pair<int, int> right = DFS(root->right);
        return {root->val + left.second + right.second, max(left.first, left.second) + max(right.first, right.second)};
    }
};
