/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfTwo = function(n) {
  while (n) {
    if (n === 1) return true;
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      return false;
    }
  }
  return false;
};