class Solution {
public:
    int searchInsert(int A[], int n, int target) {
        int mid,low=0,high=n-1;
        while (low<=high) {
            mid=(low+high)/2;
            if (A[mid]==target) {
                return mid;
            }
            if (A[mid]>target) {
                if (A[mid-1]<target||mid==0) {
                    return mid;
                } else {
                    high=mid-1;
                }
            }
            if (A[mid]<target) {
                if (A[mid+1]>target||mid==high) {
                    return mid+1;
                } else {
                    low=mid+1;
                }
            }
        }
    }
};