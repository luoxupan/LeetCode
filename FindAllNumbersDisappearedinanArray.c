#include <stdio.h>
#include <stdlib.h>
/**
 * Return an array of size *returnSize.
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* findDisappearedNumbers(int* nums, int numsSize, int* returnSize) {

    for (int i = 0; i < numsSize; ++i) {
        int num = nums[i] - 1;
        if (nums[num] > 0) {
            nums[num] = -nums[num];
        }
    }
    int *returnNumber = (int *)malloc(sizeof(int) * (*returnSize));
    int count = 0;
    for (int i = 0; i < numsSize; ++i) {
        if (nums[i] > 0) {
            returnNumber[count++] = i + 1;
        }
    }
    return returnNumber;
}

// C++版本
class Solution {
public:
    vector<int> findDisappearedNumbers(vector<int>& nums) {
        int size = nums.size();
        for (int i = 0; i < size; ++i) {
            int num = abs(nums[i]) - 1;
            if (nums[num] > 0) {
                nums[num] = -nums[num];
            }
        }
        vector<int> res;
        for (int i = 0; i < size; ++i) {
            if (nums[i] > 0) {
                res.push_back(i + 1);
            }
        }
        return res;
    }
};

int main(int argc, char const *argv[]) {
    int nums[4] = {4,2,2,2};
    int n = 2;
    int *returnNumber = findDisappearedNumbers(nums, 4, &n);
    for (int i = 0; i < n; ++i) {
        printf("%d\n", returnNumber[i]);
    }
    return 0;
}
