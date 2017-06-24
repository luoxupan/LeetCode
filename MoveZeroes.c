void moveZeroes(int* nums, int numsSize) {
    int head = 0;
    int size = numsSize;
    while (head < size) {
        if (nums[head] == 0) {
            for (int i = head; i < size - 1; ++i) {
                nums[i] = nums[i + 1];
            }
            nums[size - 1] = 0;
            size--;
        } else {
            head++;
        }
    }
}
