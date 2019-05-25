class Solution {
public:
    bool isPalindrome(string s) {
        int size = s.size();
        int l = 0;
        int r = size - 1;
        while (l < r) {
            while (l < r && !isalnum(s[l])) l++;
            while (l < r && !isalnum(s[r])) r--;
            if (toupper(s[l]) != toupper(s[r])) return false;
            l++; r--;
        }
        return true;
    }
};