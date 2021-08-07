class Solution {
public:
    void sortColors(int A[], int n) {
        int red=0,blue=n-1;
        for (int i=0;i<=blue;) {
            if (A[i]==0) {
                swap(A[red++],A[i++]);
            } else if (A[i]==2) {
                swap(A[blue--],A[i]);
            } else {
                i++;
            }
        }
    }
};