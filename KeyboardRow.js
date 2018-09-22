/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let str_01 = 'QWERTYUIOPqwertyuiop';
    let str_02 = 'ASDFGHJKLasdfghjkl';
    let str_03 = 'ZXCVBNMzxcvbnm';
    let ret = [];
    words.forEach((str) => {
        let c = str[0];
        let isAddTo;
        if (str_01.includes(c)) {
            isAddTo = isSameLine(str_01, str);
        } else if (str_02.includes(c)) {
            isAddTo = isSameLine(str_02, str);
        } else {
            isAddTo = isSameLine(str_03, str);
        }
        if (isAddTo) {
            ret.push(str);
        }
    });
    return ret;
};

var isSameLine = function(lineString, subString) {
    for (let i = 0; i < subString.length; ++i) {
        if (!lineString.includes(subString[i])) {
            return false;
        }
    }
    return true;
};