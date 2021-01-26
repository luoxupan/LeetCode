/**
 * @param {number} n
 * @return {number}
 * 
 * 这个题用三指针，第一个丑数是1，以后的丑数都是基于前面的小丑数分别乘2，3，5构成的。
 * 我们每次添加进去一个当前计算出来个三个丑数的最小的一个，并且是谁计算的，谁指针就后移一位。
 * 
 */
var nthUglyNumber = function(n) {
  var array =[1];
  var a2 = 0;
  var a3 = 0;
  var a5 = 0;
  for (var i = 1; i < n; i++) {
    array[i] = Math.min(array[a2] * 2, array[a3] * 3, array[a5] * 5);
    if (array[a2] * 2 === array[i]) a2++;
    if (array[a3] * 3 === array[i]) a3++;
    if (array[a5] * 5 === array[i]) a5++;
  }
  return array[n - 1];
};
  