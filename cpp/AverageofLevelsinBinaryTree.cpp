// Input:
//     3
//    / \
//   9  20
//     /  \
//    15   7
// Output: [3, 14.5, 11]
// Explanation:
// The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].

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
    vector<double> averageOfLevels(TreeNode* root) {
        vector<double> nums;
        if (root == NULL) return nums;
        queue<TreeNode*> q;
        q.push(root);
        while (!q.empty()) {
            int size = q.size();
            double allNum = 0;
            for (int i = 0; i < size; ++i) {
                TreeNode* p = q.front();
                allNum += p->val;
                q.pop();
                if (p->left != NULL) q.push(p->left);
                if (p->right != NULL) q.push(p->right);
            }
            nums.push_back(allNum/size);
        }
        return nums;
    }
};
