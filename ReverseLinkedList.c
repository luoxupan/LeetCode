/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* reverseList(struct ListNode* head) {
    struct ListNode* pre = NULL, *p;
    while (head != NULL) {
        p = head->next;
        head->next = pre;
        pre = head;
        head = p;
    }
    return pre;
}
