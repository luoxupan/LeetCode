class Solution {
public:
    int removeElement(int A[], int n, int elem) {
        int co=n;
        for (int i=0; i<n; ) {
            if (A[i] == elem) {
                for (int j=i;j<n;++j) {
                    A[j] = A[j+1];
                }
                n--;
            } else {
                ++i;
            }
        }
        return n;
    }
};