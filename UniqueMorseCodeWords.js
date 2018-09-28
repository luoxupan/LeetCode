/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    let array = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    let map = {};
    let str = 'abcdefghijklmnopqrstuvwxyz';
    str.split('').forEach((item, index) => map[item] = array[index]);
    let arr = [];
    words.forEach((item) => {
        let s = word2map(map, item);
        if (arr.indexOf(s) == -1) {
            arr.push(s);
        }
    });
    return arr.length;
};

var word2map = function(map, word = '') {
    let ret = '';
    word.split('').forEach((item) => {
        ret += map[item];
    });
    return ret;
};