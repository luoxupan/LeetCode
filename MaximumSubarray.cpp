class Solution {
public:
    int m(int a[],int low,int high) {
        if (low==high) {
            return a[low];
        }
        int mid=(low+high)/2;
        int leftMax=m(a,low,mid);
        int rightMax=m(a,mid+1,high);
        int ax=a[mid],s1=a[mid];
        for (int i=mid-1;i>=low;--i) {
            ax+=a[i];
            s1=s1>ax?s1:ax;
        }
        int bx=a[mid+1],s2=a[mid+1];
        for (int i=mid+2;i<=high;++i) {
            bx+=a[i];
            s2=s2>bx?s2:bx;
        }
        int max=s1+s2;
        max=max>leftMax?max:leftMax;
        max=max>rightMax?max:rightMax;
        return max;
    }
    int maxSubArray(int A[], int n) {
        int ma=m(A,0,n-1);
        return ma;
    }
};