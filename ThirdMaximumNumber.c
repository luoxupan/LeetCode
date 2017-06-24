#include <stdio.h>

int thirdMax(int* nums, int numsSize) {
    int *one = NULL, *two = NULL, *three = NULL;
    for (int i = 0; i < numsSize; ++i) {
        if ((one != NULL && *one == nums[i]) || (two != NULL && *two == nums[i]) || (three != NULL && *three == nums[i])) {
            continue;
        }
        if (one == NULL || nums[i] > *one) {
            three = two;
            two = one;
            one = &nums[i];
        } else if (two == NULL || nums[i] > *two) {
            three = two;
            two = &nums[i];
        } else if (three == NULL || nums[i] > *three) {
            three = &nums[i];
        }
    }
    // printf("%d\n", *one);
    // printf("%d\n", *two);
    // printf("%d\n", *three);
    return three == NULL ? *one: *three;
}

int main(int argc, char const *argv[]) {
    int nums[3] = {5,2,2};
    thirdMax(nums, 3);
    return 0;
}
