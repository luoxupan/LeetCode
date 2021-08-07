class Solution {
public:
    vector<int> twoSum(vector<int> &numbers, int target) {
        map<int,int> m;
		map<int,int>::iterator it;
		for (int i=0; i<numbers.size(); i++) {
			it=m.find(target-numbers[i]);
			if (it!=m.end()) {
				return vector<int>({it->second+1,i+1});
			} else {
				m[numbers[i]]=i;
			}
		}
    }
};
