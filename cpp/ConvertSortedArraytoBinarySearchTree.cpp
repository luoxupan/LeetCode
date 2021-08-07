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
    
    TreeNode* insert(vector<int> &num,int l,int r) {
        if (l>r) {
            return NULL;
        }
        int mid=(l+r)/2;
        TreeNode* root=new TreeNode(num[mid]);
        root->left=insert(num,l,mid-1);
        root->right=insert(num,mid+1,r);
        return root;
    }
    TreeNode *sortedArrayToBST(vector<int> &num) {
        int len=num.size();
        if (len==0) {
            return NULL;
        }
        return insert(num,0,len-1);
    }
};