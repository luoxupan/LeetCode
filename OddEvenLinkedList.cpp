/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* oddEvenList(struct ListNode* head) {

    if (head != NULL) {
        struct ListNode *h = head, *pre = head->next, *tmp = NULL;
        while (pre != NULL && pre->next != NULL) {
            tmp = pre->next;
            pre->next = tmp->next;
            tmp->next = h->next;
            h->next = tmp;

            pre = pre->next;
            h = h->next;
        }
    }
    return head;
}
