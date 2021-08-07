class Solution {
public:
    string toLowerCase(string str) {
        string lowerstr = "";
        for (auto c : str) {
            if (isupper(c) != 0) {
                lowerstr += tolower(c);
            } else {
                lowerstr += c;
            }
        }
        return lowerstr;
    }
};