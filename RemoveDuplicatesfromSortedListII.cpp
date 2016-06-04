/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    ListNode *deleteDuplicates(ListNode *head) {
        if (head==NULL) {
            return head;
        }
        ListNode** p=&head,*del=NULL;
        while ((*p)&&(*p)->next) {
            if ((*p)->val==(*p)->next->val) {
                int nu=(*p)->val;
                while (*p&&(*p)->val==nu) {
                    del=*p;
                    *p=(*p)->next;
                    delete del;
                }
            } else {
                p=&(*p)->next;
            }
        }
        return head;
    }
};