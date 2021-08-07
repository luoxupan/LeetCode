class Solution {
public:
    string reverseVowels(string s) { // a e i o u
        int size = s.size();
        int l = 0;
        int r = size - 1;
        while (l < r) {
            while (l < r && !isVowels(s[l])) l++;
            while (l < r && !isVowels(s[r])) r--;
            if (l < r && isVowels(s[l]) && isVowels(s[r])) {
                swap(s[l++], s[r--]);
            }
        }
        return s;
    }
    
    bool isVowels(char ch) {
        char c = tolower(ch);
        if (c == 'a') return true;
        if (c == 'e') return true;
        if (c == 'i') return true;
        if (c == 'o') return true;
        if (c == 'u') return true;
        return false;
    }
};