class Solution {
public:
    int climbStairs(int n) {
        int a=1,b=1,c;
        for (int i=1; i<n; ++i) {
            c=a;
            a=a+b;
            b=c;
        }
        return a;
    }
};