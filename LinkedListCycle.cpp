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
    bool hasCycle(ListNode *head) {
        ListNode *slow = head, *fist = head;
        while (fist && fist->next) {
            slow=slow->next;
            fist=fist->next->next;
            if (slow==fist) {
                return true;
            }
        }
        return false;
    }
};