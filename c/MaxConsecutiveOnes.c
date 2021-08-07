int findMaxConsecutiveOnes(int* nums, int numsSize) {
    int max = 0;
    int count = 0;
    for (int i = 0; i < numsSize; ++i) {
        if (nums[i] == 1) {
            count++;
        } else {
            if (max < count) {
                max = count;
            }
            count = 0;
        }
    }
    return max > count ? max : count;
}
