/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let route = { L: 0, R: 0, U: 0, D: 0 };
    let ret;
    moves.split('').forEach((item) => route[item]++);
    let isLR = route['L'] == route['R'];
    let isUD = route['U'] == route['D'];
    if (isLR && isUD) {
        ret = true;
    } else {
        ret = false;
    }
    return ret;
};