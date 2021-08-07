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
    TreeNode* addOneRow(TreeNode* root, int v, int d) {
        if (root == NULL) return root;
        queue<TreeNode*> q;
        // q保存d的上一层的所有节点
        if (d != 1) q.push(root);
        while (d > 2) {
            int size = q.size();
            for (int i = 0; i < size; ++i) {
                TreeNode* p = q.front();
                q.pop();
                if (p->left != NULL) q.push(p->left);
                if (p->right != NULL) q.push(p->right);
            }
            d--;
        }
        while (!q.empty()) {
            TreeNode* p = q.front();
            q.pop();
            if (p->left != NULL) {
                TreeNode* newNode = new TreeNode(v);
                newNode->left = p->left;
                p->left = newNode;
            }
            if (p->right != NULL) {
                TreeNode* newNode = new TreeNode(v);
                newNode->right = p->right;
                p->right = newNode;
            }
            if (p->left == NULL) {
                TreeNode* newNode_1 = new TreeNode(v);
                p->left = newNode_1;
            }
            if (p->right == NULL) {
                TreeNode* newNode_2 = new TreeNode(v);
                p->right = newNode_2;
            }
        }
        if (d == 1) {
            TreeNode* newNode = new TreeNode(v);
            newNode->left = root;
            return newNode;
        } else {
            return root;
        }
    }
};
