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
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        stack<ListNode*> s_1;
        stack<ListNode*> s_2;
        ListNode* p_1 = l1, *p_2 = l2;
        while (p_1 != NULL) {
            s_1.push(p_1);
            p_1 = p_1->next;
        }
        while (p_2 != NULL) {
            s_2.push(p_2);
            p_2 = p_2->next;
        }
        int n = 0;
        while (!s_1.empty() && !s_2.empty()) {
            ListNode* p1 = s_1.top();
            ListNode* p2 = s_2.top();
            s_1.pop();
            s_2.pop();
            int num = p1->val + p2->val + n;
            n = num / 10;
            p1->val = p2->val = num % 10;
        }

        if (!s_1.empty()) {
            while (n != 0 && !s_1.empty()) {
                ListNode* p1 = s_1.top();
                s_1.pop();
                int num = p1->val + n;
                n = num / 10;
                p1->val = num % 10;
            }
            if (n != 0) {
                ListNode* p = new ListNode(n);
                p->next = l1;
                return p;
            }
            return l1;
        }
        if (!s_2.empty()) {
            while (n != 0 && !s_2.empty()) {
                ListNode* p2 = s_2.top();
                s_2.pop();
                int num = p2->val + n;
                n = num / 10;
                p2->val = num % 10;
            }
            if (n != 0) {
                ListNode* p = new ListNode(n);
                p->next = l2;
                return p;
            }
            return l2;
        }
        if (s_1.empty() && s_2.empty() && n != 0) {
            ListNode* p = new ListNode(n);
            p->next = l2;
            return p;
        }
        return l1;
    }
};
