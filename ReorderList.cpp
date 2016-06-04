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
    int num(ListNode* head) {
        int n=0;
        ListNode* p=head;
        while (p) {
            n++;
            p=p->next;
        }
        return n;
    }
    void reorderList(ListNode *head) {
        if (head==NULL||head->next==NULL||head->next->next==NULL) {
            return ;
        }
        int a=num(head);
        int h1=(a%2==0)?a/2:a/2+1;
        int h2=a-h1;
        ListNode* p1=head,*p2=NULL;
        for (int i=1;i<h1;i++) {
            p1=p1->next;
        }p2=p1->next;p1->next=NULL;
        stack<ListNode*> st;
        while (p2) {
            st.push(p2);
            p2=p2->next;
        }
        p1=head;
        for (int i=0;i<h2;i++) {
            p2=st.top();
            st.pop();
            p2->next=p1->next;
            p1->next=p2;
            p1=p2->next;
        }
        
    }
};





