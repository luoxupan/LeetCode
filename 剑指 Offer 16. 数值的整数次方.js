/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
 var myPow = function(x, n) {
  if (n === 0) return 1;
  var cash = [];
  var curNum = x;;
  var flag = n > 0 ? true : false;
  n = Math.abs(n);
  while (n !== 1) {
    if (n%2 === 1) {
      n -= 1;
      cash.push(curNum);
    } else {
      n /= 2;
      curNum *= curNum;
    }
  }
  cash.push(curNum);
  var ret = cash.reduce((x, y) => x * y);
  return flag ? ret : 1/ret;
};