class Solution {
public:
    int removeDuplicates(int A[], int n) {
        if (n==0 || n==1) {
            return n;
        }
        int b = 0;
        for (int i=1; i<n; i++) {
            if (A[b] != A[i]) {
                A[++b] = A[i];
            }
        }
        return b+1;
    }
};