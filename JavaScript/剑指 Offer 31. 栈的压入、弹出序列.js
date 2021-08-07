/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
  var stack = [];
  var curIdx = 0;
  for (var i = 0; i < pushed.length; ++i) {
    if (pushed[i] === popped[curIdx]) {
      curIdx++;
    } else {
      var len = stack.length - 1;
      while (len >= 0 && stack[len] === popped[curIdx]) {
        len--;
        curIdx++;
        stack.pop();
      }
      stack.push(pushed[i]);
    }
  }
  while (curIdx < popped.length) {
    if (popped[curIdx] === stack.pop()) {
      curIdx++;
    } else {
      break;
    }
  }
  return stack.length === 0 ? true : false;
};
