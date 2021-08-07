/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    A.forEach((item) => {
        flip(item);
        reverse(item);
    });
    return A;
};

var flip = function(array = []) {
    let l = 0;
    let r = array.length - 1;
    if (r < 1) {
        return array;
    } else {
        while (l < r) {
            let opt = array[l];
            array[l] = array[r];
            array[r] = opt;
            l++;
            r--;
        }
        return array;
    }
};

var reverse = function(array = []) {
    array.forEach((item, index) => array[index] = item ^ 1);
    return array;
};