/**
 * Definition for singly-linked list with a random pointer.
 * struct RandomListNode {
 *     int label;
 *     RandomListNode *next, *random;
 *     RandomListNode(int x) : label(x), next(NULL), random(NULL) {}
 * };
 */
class Solution {
public:
    RandomListNode *copyRandomList(RandomListNode *head) {
        map<RandomListNode *, RandomListNode *> cp_map;
        RandomListNode *p = head;
        RandomListNode *cp_head = new RandomListNode(-1);
        RandomListNode *cur = cp_head;
        while (p != NULL) {
            RandomListNode *cpNode = new RandomListNode(p->label);
            cur->next = cpNode;
            cur = cur->next;
            cp_map[p] = cpNode;
            p = p->next;
        }
        p = head;
        while (p != NULL) {
            if (p->random != NULL) {
                cp_map[p]->random = cp_map[p->random];
            }
            p = p->next;
        }
        return cp_head->next;
    }
};
