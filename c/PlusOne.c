class Solution {
public:
    vector<int> plusOne(vector<int>& digits) {
        int size = digits.size();
        int add = 1;
        for (int i = size - 1; i >= 0; --i) {
            int a = digits[i] + add;
            digits[i] = a % 10;
            add = a / 10;
        }
        if (add > 0) {
            digits.insert(digits.begin(), 1, add);
        }
        return digits;
    }
};
