int strStr(char* haystack, char* needle) {
    if (haystack == NULL || haystack == "" || needle == NULL || needle == "") return -1;
    int p = 0;
    int j = 0;
    while (true) {
        int i = p;
        j = 0;
        while (needle[j] != NULL) {
            if (haystack[i] != needle[j]) {
                break;
            }
            i++;
            j++;
        }
        if (needle[j] == NULL) return p;
        if (haystack[p] == NULL) break;
        p++;
    }
    return -1;
}
