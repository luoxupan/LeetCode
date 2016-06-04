class Solution {
public:
    int findMin(vector<int> &num) {
        int min=num[0];
        for (int i=1;i<num.size();i++) {
            if (num[i]<min){
                min=num[i];
            }
        }
        return min;
    }
};