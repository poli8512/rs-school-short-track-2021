/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let strt = 0;
  let end = array.length - 1;
  let res;
  const loop = () => {
    const mid = Math.floor((end + strt) / 2);
    if (array[mid] === value) {
      res = mid;
      return;
    } if (array[mid] < value) {
      strt = mid + 1;
    } else if (array[mid] > value) {
      end = mid - 1;
    }
    if (strt <= end) {
      loop();
    }
  };
  loop();
  return res;
}

module.exports = findIndex;
