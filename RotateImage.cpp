class Solution {
public:
    void rotate(vector<vector<int> > &matrix) {
        int x=matrix.size();
        int num;
        for (int i=0;i<x;++i) {
            for (int j=i;j<x;++j) {
                swap(matrix[i][j],matrix[j][i]);
            }
        }
        for (int i=0;i<x;++i) {
            for (int j=0;j<x/2;++j) {
                swap(matrix[i][j],matrix[i][x-1-j]);
            }
        }
    }
};