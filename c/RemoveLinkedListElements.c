/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* removeElements(struct ListNode* head, int val) {
    struct ListNode* pre = (struct ListNode *)malloc(sizeof(struct ListNode));
    pre->next = head;
    struct ListNode* p = pre;
    while (p->next != NULL) {
        if (p->next->val == val) {
            struct ListNode* tmp = p->next;
            p->next = tmp->next;
            free(tmp);
        } else {
            p = p->next;
        }
    }
    p = pre->next;
    free(pre);
    return p;
}
