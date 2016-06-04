class Solution {
public:
    string reverseString(string s) {
        if(s=="")
            return s;
        int i=0,j=s.length()-1;
        while(i < j){
            swap(s[i++],s[j--]);
        }
        return s;
    }
};