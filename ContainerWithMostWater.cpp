class Solution {
public:
    int maxArea(vector<int> &height) {
        int max=-100000000;
        int left=0;
        int right=height.size()-1;
        while (left<=right){
            int min=height[left]>height[right]?height[right]:height[left];
            int num=(right-left)*min;
            max=max>num?max:num;
            if (height[left]>height[right]) {
                right--;
            } else {
                left++;
            }
        }
        return max;
    }
};