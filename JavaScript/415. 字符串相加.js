/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var addStrings = function(num1, num2) {
  var array = [];
  var i = num1.length - 1;
  var j = num2.length - 1;
  var cur = 0;
  while (i >= 0 || j >= 0 || cur > 0) {
    if (i >= 0) {
      cur += parseInt(num1[i--]);
    }
    if (j >= 0) {
      cur += parseInt(num2[j--]);
    }
    array.unshift(Math.floor(cur % 10));
    cur = Math.floor(cur / 10);
  }
  return array.join('');
};