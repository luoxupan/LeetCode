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
    ListNode *partition(ListNode *head, int x) {
        if (head==NULL) {
            return head;
        }
        ListNode* he1=new ListNode(-1),*he2=new ListNode(-1);
        ListNode*h1=he1,*h2=he2;
        while (head) {
            ListNode* p=NULL;
            if (head->val<x) {
                p=head->next;
                h1->next=head;
                h1=head;
                head->next=NULL;
                head=p;
            } else {
                p=head->next;
                h2->next=head;
                h2=head;
                head->next=NULL;
                head=p;
            }
        }
        h1->next=he2->next;
        return he1->next;
    }
};