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
    ListNode *insertionSortList(ListNode *head) {
        if (head==NULL||head->next==NULL) {
            return head;
        }
        ListNode* head2=head->next,*p=NULL,*e=NULL,*d=NULL;
        head->next=NULL;
        while (head2) {
            p=head2->next;
            if (head2->val<=head->val) {
                head2->next=head;
                head=head2;
            } else {
                e=head;
                while (e->next&&e->next->val<head2->val) {
                   // e=d;
                    e=e->next;
                }
                head2->next=e->next;
                e->next=head2;
            }
            head2=p;
        }
        return head;
    }
};