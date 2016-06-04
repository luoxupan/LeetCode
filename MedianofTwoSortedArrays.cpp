class Solution {
public:
    double findMedianSortedArrays(int A[], int m, int B[], int n) {
        int* ab=new int[n+m];
        int s=0;
        int i=0,j=0;
        while (i<m&&j<n) {
            if (A[i]<=B[j]) {
                ab[s++]=A[i++];
            } else {
                ab[s++]=B[j++];
            }
            
        }
        if (i<m) {
        	while (i<m) {
            	ab[s++]=A[i++];
        	}
        }
        
        if (j<n) {
        	while (j<n) {
            	ab[s++]=B[j++];
        	}
        }
        
        double median;
        int c=(m+n)/2;
        if ((m+n)%2!=0) {
            median=ab[c];
        }
        else {
            median=(double)(ab[c]+ab[c-1])/2.0;
        }
        delete ab;
        return median;
    }
};