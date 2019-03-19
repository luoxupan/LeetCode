/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 * 
 * You are given a binary tree in which each node contains an integer value.

    Find the number of paths that sum to a given value.

    The path does not need to start or end at the root or a leaf, but it must go downwards (traveling only from parent nodes to child nodes).

    The tree has no more than 1,000 nodes and the values are in the range -1,000,000 to 1,000,000.

    Example:

    root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8

        10
        /  \
        5   -3
    / \    \
    3   2   11
    / \   \
    3  -2   1

    Return 3. The paths that sum to 8 are:

    1.  5 -> 3
    2.  5 -> 2 -> 1
    3. -3 -> 11
 */
class Solution {
public:
    int pathSum(TreeNode* root, int sum) {
        if (root == NULL) return 0;
        int ret = nodePath(root, root->val, sum);
        int left = pathSum(root->left, sum);
        int right = pathSum(root->right, sum);
        return left + right + ret;
    }
    
    int nodePath(TreeNode* root, int total, int sum) {
        int left = 0;
        int right = 0;
        int ret = 0;
        if (root == NULL) return 0;
        if (total == sum) ret = 1;
        if (root->left) left = nodePath(root->left, total + root->left->val, sum);
        if (root->right) right = nodePath(root->right, total + root->right->val, sum);
        return left + right + ret;
    }
};