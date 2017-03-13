#include <stdio.h>

int hammingDistance(int x, int y) {
    int count = 0;
    int num = x ^ y;
    printf("num is: %d\n", num);
    while (num) {
        if (num & 1) {
            count++;
        }
        num >>= 1;
    }
    return count;
}

int main(int argc, char const *argv[]) {
    // int a = 4;
    // while (a) {
    //     printf("%d\n", a);
    //     a = a >> 1;
    // }
    printf("result is:%d\n", hammingDistance(1, 4));
    printf("result is:%d\n", hammingDistance(33, 33));
    printf("result is:%d\n", hammingDistance(0, 1));
    return 0;
}
