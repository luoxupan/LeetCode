/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  for (var i = 0;i < board.length; ++i) {
    for (var j = 0; j < board[0].length; ++j) {
      if (dfs(board, word, i, j, 0)) {
        return true;
      }
    }
  }
  return false;
};

var dfs = function(board, word, i, j, idx) {
  if (i < 0 || j < 0 || i >= board.length || j >= board[0].length || board[i][j] !== word[idx]) {
    return false;
  }
  if (idx === (word.length - 1)) {
    return true;
  }
  board[i][j] = '~';
  if (dfs(board, word, i - 1, j, idx + 1)
    || dfs(board, word, i + 1, j, idx + 1)
    || dfs(board, word, i, j - 1, idx + 1)
    || dfs(board, word, i, j + 1, idx + 1)) {
    return true;
  }
  board[i][j] = word[idx];
  return false;
};
