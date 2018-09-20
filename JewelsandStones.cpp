class Solution {
public:
    int numJewelsInStones(string J, string S) {
        int ret = 0;
        int lenJ = J.size();
        int lenS = S.size();
        for (int i = 0; i < lenJ; ++i) {
            for (int j = 0; j < lenS; ++j) {
                if (J[i] == S[j]) {
                    ret++;
                }
            }
        }
        return ret;
    }
};

class Solution {
public:
    int numJewelsInStones(string J, string S) {
        int ret = 0;
        map<char,int> strmap;
        for (auto i : J) {
            strmap[i] = 1;
        }
        for (auto i : S) {
            if (strmap.find(i) != strmap.end()) {
                ret++;
            }
        }
        return ret;
    }
};