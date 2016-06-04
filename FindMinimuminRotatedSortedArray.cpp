class Solution {
public:
    int findMin(vector<int> &num) {
        int min;
        int left=0,right=num.size()-1;
        while (left<=right) {
            int mid=(left+right)/2;
            if (num[left]<=num[mid]&&num[mid]<=num[right]) {
                break;
            }
            if (num[left]<=num[mid]&&num[mid]>=num[right]) {
                left=mid+1;
            }
            if (num[left]>=num[mid]&&num[mid]<=num[right]) {
                left+=1;
            }
        }
        return num[left];
    }
};