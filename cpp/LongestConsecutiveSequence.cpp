class Solution {
public:
    int longestConsecutive(vector<int> &num) {
        if (num.size() == 0) {
            return 0;
        }
        set<int> s;
        for (int i=0;i<num.size();i++) {
            s.insert(num[i]);
        }
        set<int>::iterator it=s.begin();
        int last=*it;
        int max=0,count=1;
        while (++it!=s.end()) {
            if (*it==last+1) {
                count++;
            } else {
                max=max>count?max:count;
                count=1;
            }
            last=*it;
        }
        max=max>count?max:count;
        return max;
    }
};