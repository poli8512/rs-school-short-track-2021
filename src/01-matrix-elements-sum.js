/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matr) {
  let sum = 0;
  matr[0].forEach((element) => {
    sum += element;
  });

  for (let i = 1; i < matr.length; i++) {
    for (let g = 0; g < matr[i].length; g++) {
      if (matr[i - 1][g] !== 0) {
        sum += matr[i][g];
      }
    }
  }
  return sum;
}

module.exports = getMatrixElementsSum;
