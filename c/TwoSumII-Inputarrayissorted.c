class Solution {
public:
    vector<int> twoSum(vector<int>& numbers, int target) {
        vector<int> res;
        int size = numbers.size();
        int head = 0, tail = size - 1;
        while (true) {
            if ((numbers[head] + numbers[tail]) == target) {
                    break;
            }
            if ((numbers[head] + numbers[tail]) < target) {
                head++;
            }
            if ((numbers[head] + numbers[tail]) > target) {
                tail--;
            }
        }
        res.push_back(head + 1);
        res.push_back(tail + 1);
        return res;
    }
};
