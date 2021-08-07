#include <stdio.h>
#include <stdlib.h>
// 数都是以补码形式存储的

int findComplement(int num) {
    int ret = 1;
    while (ret < num) {
        ret = (ret << 1) | 1;
    }
    printf("ret: %d\n", ret);
    return ~num & ret;
}


int main(int argc, char const *argv[]) {
    int num = 5;
    findComplement(num);
    printf("~num: %d\n", ~num);
    return 0;
}
