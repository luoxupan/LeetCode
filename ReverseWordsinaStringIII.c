#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>
#include <string.h>

void reverseS(int head, int tail, char* s) {
    while (head < tail) {
        // 注意while循环条件 
        int ele = s[head];
        s[head] = s[tail];
        s[tail] = ele;
        head++;
        tail--;
    }
}

char* reverseWords(char* s) {
    int index = 0;
    int len = strlen(s);
    for (int i = 0; i <= len; i++) {
        if (s[i] == ' ' || s[i] == '\0') {
            // '\0'，即空字符。判断一个字符串是否结束的标志就是看是否遇到'\0'，如果遇到'\0'，则表示字符串结束
            reverseS(index, i - 1, s);
            printf("i: %d j: %d\n", index, i - 1);
            index = i + 1;
        }
    }
    return s;
}

int main(int argc, char const *argv[]) {
    char s[] = "Let's take LeetCode contest";
    char *sTr = reverseWords(s);
    return 0;
}
