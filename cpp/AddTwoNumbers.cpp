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
    ListNode *addTwoNumbers(ListNode *l1, ListNode *l2) {
        ListNode** p=&l1;
        int add=0;
        while (*p&&l2) {
            (*p)->val+=add+l2->val;
            if ((*p)->val>9) {
                add=1;
                (*p)->val-=10;
            } else {
                add=0;
            }
            p=&((*p)->next);
            l2=l2->next;
        }
        if (l2) {
            *p=l2;
        }
        while (add&&*p) {
            (*p)->val+=add;
            if ((*p)->val>9) {
                (*p)->val-=10;
            } else {
                add=0;
                break;
            }
            p=&((*p)->next);
        }
        if (add){
            *p=new ListNode(1);
        }
        return l1;
    }
};