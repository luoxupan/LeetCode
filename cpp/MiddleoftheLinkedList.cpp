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
    ListNode* middleNode(ListNode* head) {
        if (head == NULL) return head;
        ListNode* rear = head;
        ListNode* pre = head;
        ListNode* p = NULL;
        ListNode* ret = NULL;
        while (pre != NULL) {
            p = pre->next;
            if (p == NULL) {
                ret = rear;
                break;
            } else if (p->next == NULL) {
                ret = rear->next;
                break;
            } else {
                rear = rear->next;
                pre = p->next;
            }
        }
        return ret;
    }
};
