class Solution {
public:
    int num(int a,int b,int c) {
        int max=a;
        if (max<b) {
            max=b;
        }
        if (max<c) {
            max=c;
        }
        return max;
    }
    int xiao(int a,int b,int c) {
        int max=a;
        if (max>b) {
            max=b;
        }
        if (max>c) {
            max=c;
        }
        return max;
        
    }
    int maxProduct(int A[], int n) {
        if (n<1) {
            return 0;
        }
        int man,min;
        int all;
        man=A[0];
        min=A[0];
        all=A[0];
        for (int i=1;i<n;i++) {
            int a=man*A[i];
            int b=min*A[i];
            int c=A[i];
            man=num(a,b,c);
            min=xiao(a,b,c);
            all=all>man?all:man;
        }
        return all;
    }
};