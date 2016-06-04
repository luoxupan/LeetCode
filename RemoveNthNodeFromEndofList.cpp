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
    ListNode *removeNthFromEnd(ListNode *head, int n) {
        ListNode **p=&head, **fr=&head;
        while (--n) {
            p=&((*p)->next);
        }
        while ((*p)->next) {
            p=&((*p)->next);
            fr=&((*fr)->next);
        }
        *fr = (*fr)->next;
        return head;
    }
};