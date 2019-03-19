/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 * 
 * 
 * Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s. A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.

Example 1:
Given tree s:

     3
    / \
   4   5
  / \
 1   2
Given tree t:
   4 
  / \
 1   2
Return true, because t has the same structure and node values with a subtree of s.
Example 2:
Given tree s:

     3
    / \
   4   5
  / \
 1   2
    /
   0
Given tree t:
   4
  / \
 1   2
Return false.
 * 
 */
class Solution {
public:
    bool isSubtree(TreeNode* s, TreeNode* t) {
        bool left = false;
        bool right = false;
        if (isSameTree(s, t)) return true;
        if (s->left) left = isSubtree(s->left, t);
        if (s->right) right = isSubtree(s->right, t);
        return left || right;
    }
    
    bool isSameTree(TreeNode* root, TreeNode* sub) {
        if (root == NULL && sub == NULL) return true;
        if (root == NULL || sub == NULL) return false;
        if (root->val != sub->val) return false;
        else {
            return isSameTree(root->left, sub->left) &&
                isSameTree(root->right, sub->right);
        }
    }
};
