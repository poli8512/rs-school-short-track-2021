/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = [];
  for (let row = 0; row < matrix.length; row++) {
    const subAr = [];
    for (let col = 0; col < matrix[row].length; col++) {
      let currentNumb = 0;
      // ряд выше row-1
      if (matrix[row - 1]) {
        if (matrix[row - 1][col - 1]) {
          currentNumb += +matrix[row - 1][col - 1];
        }
        if (matrix[row - 1][col]) {
          currentNumb += +matrix[row - 1][col];
        }
        if (matrix[row - 1][col + 1]) {
          currentNumb += +matrix[row - 1][col + 1];
        }
      }
      // ряд ниже row+1
      if (matrix[row + 1]) {
        if (matrix[row + 1][col - 1]) {
          currentNumb += +matrix[row + 1][col - 1];
        } else if (matrix[row + 1][col]) {
          currentNumb += +matrix[row + 1][col];
        } else if (matrix[row + 1][col + 1]) {
          currentNumb += +matrix[row + 1][col + 1];
        }
      }
      if (matrix[row][col + 1]) {
        currentNumb += +matrix[row][col + 1];
      }
      if (matrix[row][col - 1]) {
        currentNumb += +matrix[row][col - 1];
      }
      subAr.push(currentNumb);
    }
    result.push(subAr);
  }
  return result;
}

module.exports = minesweeper;
