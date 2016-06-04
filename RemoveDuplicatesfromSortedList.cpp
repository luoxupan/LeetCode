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
        if (head == NULL)
            return head;
        ListNode* p=head,*d=head;
        while (p->next) {
            if (p->val==p->next->val) {
                d=p->next;
                p->next=d->next;
                delete d;
            } else {
                p=p->next;
            }
        }
        return head;
    }
};