
#include <iostream>
#include <vector>
using namespace std;

struct ListNode {
    int val;
    struct ListNode *next;
    ListNode(int x) : val(x), next(NULL) {}
};


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

int main(int argc, char const *argv[]) {
    
    vector<int> *v = new vector<int>;
    v->push_back(4);
    v->push_back(7);
    cout<<v->front()<<endl;
    return 0;
}
