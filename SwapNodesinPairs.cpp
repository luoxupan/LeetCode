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
    ListNode *swapPairs(ListNode *head) {
        if (head==NULL) {
            return head;
        }
        ListNode **p = &head, *next = NULL;
        while (*p&&(*p)->next) {
            next=(*p)->next;
            (*p)->next=next->next;
            next->next=*p;
            *p=next;
            p=&((*p)->next->next);
        }
        return head;
    }
};