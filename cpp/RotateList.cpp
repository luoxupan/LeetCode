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
    ListNode *rotateRight(ListNode *head, int k) {
        if (head==NULL||k==0) {
            return head;
        }
       ListNode* p=NULL,*low=head;
       int cou=1;
       while (low->next) {
            cou++;
            low=low->next;
       }
       k=cou-k%cou;
       low->next=head;
       while (k--) {
           low=low->next;
       }
       head=low->next;
       low->next=NULL;
       return head;
    }
};