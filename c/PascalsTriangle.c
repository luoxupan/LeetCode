// Given numRows, generate the first numRows of Pascal's triangle.
//
// For example, given numRows = 5,
// Return
//
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]


/**
 * Return an array of arrays.
 * The sizes of the arrays are returned as *columnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */

#include <stdio.h>
#include <stdlib.h>

int **generate(int numRows, int **columnSizes) {

    int **array = (int **)malloc(numRows * sizeof(int *));
    int *columnSizesArray = (int *)malloc(numRows * sizeof(int));

    int i = 0;
    for (i = 0; i < numRows; ++i) {
        columnSizesArray[i] = i + 1;
        array[i] = (int *)malloc(sizeof(int) * (i + 1));
        int j = 0;
        for (j = 0; j < (i + 1); ++j) {
            if (j == 0) {
                array[i][0] = 1;
            } else if (j == i) {
                array[i][j] = 1;
            } else {
                array[i][j] = array[i - 1][j - 1] + array[i - 1][j];
            }
        }
    }
    *columnSizes = columnSizesArray;
    return array;
}

int main(int argc, char const *argv[]) {

    int *columnSizes = NULL;
    int **array = NULL;
    array = generate(4, &columnSizes);
    return 0;
}
