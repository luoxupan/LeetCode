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
    ListNode *reverseBetween(ListNode *head, int m, int n) {
        if (head==NULL) {
            return head;
        }
        ListNode* he=new ListNode(-1);
        he->next=head;
        ListNode* p=he,*car=NULL,*ni;
        for (int i=0;i<m-1;++i) {
            p=p->next;
        }
        ni=p->next;
        for (int i=m;i<n;++i) {
            car=ni->next;
            ni->next=car->next;
            car->next=p->next;
            p->next=car;
            
        }
        return he->next;
    }
};