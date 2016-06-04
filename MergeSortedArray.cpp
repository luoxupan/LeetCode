class Solution {
public:
    void merge(int A[], int m, int B[], int n) {
        
        int len = m+n;
        for (int i=m-1; i>=0; --i) {
            A[i+n] = A[i];
        }
        int a = len-m;
        int b = 0;
        int i = 0;
        while (a<len && b<n) {
            if (A[a] <= B[b]) {
                A[i++] = A[a++];
            } else {
                A[i++] = B[b++];
            }
        }
        if (a<len) {
            while (a < len) {
                A[i++] = A[a++];
            }
        } else {
            while (b < n) {
                A[i++] = B[b++];
            }
        }
    }
};