class Solution {
public:
    int uniquePaths(int m, int n) {
        int** num=new int*[m+n-1];
        for (int i=0;i<m+n-1;++i) {
            num[i]=new int[i+1];
            num[i][0]=num[i][i]=1;
        }
        for (int i=2;i<m+n-1;++i) {
            for (int j=1;j<i;++j) {
                num[i][j]=num[i-1][j-1]+num[i-1][j];
            }
        }
        return num[m+n-2][m-1];
    }
};