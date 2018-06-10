class Solution {
public:
    vector<string> letterCasePermutation(string S) {
        vector<string> array;
        DFS(array, S, 0);
        return array;
    }
    void DFS(vector<string>& array, string& S, int index) {
        if (index == S.size()) {
            array.push_back(S);
            return;
        } else {
            DFS(array, S, index + 1);
            if (isalpha(S[index])) {
                S[index] ^= 32; // 异或一下完成大小写字母转换，大小写字母差着一个32
                DFS(array, S, index + 1);
            }
        }
    }
};