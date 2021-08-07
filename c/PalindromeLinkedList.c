/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */

struct ListNode* reverseList(struct ListNode* head) {
    struct ListNode* pre = NULL, *p = NULL;
    while (head != NULL) {
        p = head->next;
        head->next = pre;
        pre = head;
        head = p;
    }
    return pre;
}

bool isPalindrome(struct ListNode* head) {
    struct ListNode* first = head, *slow = head;
    struct ListNode* p = NULL, *q = NULL;
    if (head == NULL || head->next == NULL) {
        return true;
    }
    while (first != NULL && first->next != NULL) {
        first = first->next->next;
        slow = slow->next;
    }
    if (first != NULL ) {
        // 奇数
        slow = slow->next;
    }
    p = head;

    // reverse list
    q = reverseList(slow);

    while (q != NULL) {
        if (p->val != q->val) {
            return false;
        } else {
            p = p->next;
            q = q->next;
        }
    }
    return true;
}
