/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var ret = 0;
  var min = prices[0];
  for (var i = 1; i < prices.length; ++i) {
    if (prices[i] - min <= 0) {
      min = prices[i];
    } else {
      ret = Math.max(ret, prices[i] - min);
    }
  }
  return ret;
};