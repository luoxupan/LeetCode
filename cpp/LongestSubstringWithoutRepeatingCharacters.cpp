#include <iostream>
#include <set>
using namespace std;

int lengthOfLongestSubstring(string s) {
    int size = s.size();
    int num = 0;
    set<int> lens;
    for (int i = 0; i < size; ++i) {
        set<char> s_;
        for (int j = i; j < size; ++j) {
            if (s_.find(s[j]) != s_.end()) {
                int s_size = s_.size();
                if (s_size > num) {
                    num = s_size;
                }
                s_.clear();
                break;
            } else {
                s_.insert(s[j]);
            }
        }
        if (!s_.empty()) {
            int s_size = s_.size();
            if (s_size > num) {
                num = s_size;
            }
        }
    }
    return num;
}

int main(int argc, char const *argv[]) {
    string s = "dvdf";
    lengthOfLongestSubstring(s);
    return 0;
}
