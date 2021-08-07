class Solution {
public:
    int removeDuplicates(int A[], int n) {
        // Start typing your C/C++ solution below
        // DO NOT write int main() function
        if (n<=1) {
           return n;
        }
       
        int i=1, j=1;
        int value = A[0], count=1;
        for (i=1; i<n; i++) {
            if (A[i] == value){
                count ++;
            } else {
                count = 1, value = A[i];
            }
            
            if (count <= 2) {
                A[j] = A[i];
                j++;
            }
            
        }
        return j;        
    }
};