// Solving using backtracking algorithm
// Using puzzle from sudoku_puzzels.txt
const _board = [
    ['.', '.', '.', '2', '6', '.', '7', '.', '1'],
    ['6', '8', '.', '.', '7', '.', '.', '9', '.'],
    ['1', '9', '.', '.', '.', '4', '5', '.', '.'],
    ['8', '2', '.', '1', '.', '.', '.', '4', '.'],
    ['.', '.', '4', '6', '.', '2', '9', '.', '.'],
    ['.', '5', '.', '.', '.', '3', '.', '2', '8'],
    ['.', '.', '9', '3', '.', '.', '.', '7', '4'],
    ['.', '4', '.', '.', '5', '.', '.', '3', '6'],
    ['7', '.', '3', '.', '1', '8', '.', '.', '.'],
];
sodokoSolver(_board);
console.log(_board);

function isValid(board, row, col, k) {
    for (let i = 0; i < 9; i++) {
        const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
        const n = 3 * Math.floor(col / 3) + i % 3;
        if (board[row][i] == k || board[i][col] == k || board[m][n] == k) {
          return false;
        }
    }
    return true;
}


function sodokoSolver(data) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (data[i][j] == '.') {
        for (let k = 1; k <= 9; k++) {
          if (isValid(data, i, j, k)) {
            data[i][j] = `${k}`;
          if (sodokoSolver(data)) {
           return true;
          } else {
           data[i][j] = '.';
          }
         }
       }
       return false;
     }
   }
 }
 return true;
}
// running the code matches the answer in sudoku_puzzles.txt