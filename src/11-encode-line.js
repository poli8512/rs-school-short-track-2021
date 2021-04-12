/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const res = new Map();
  const strAr = str.split('');

  strAr.forEach((element) => {
    if (res.has(element)) {
      res.set(element, res.get(element) + 1);
    } else {
      res.set(element, 1);
    }
  });
  let retrnStr = '';
  res.forEach((v, k) => {
    retrnStr += `${v > 1 ? v : ''}${k}`;
  });
  return retrnStr;
}

module.exports = encodeLine;
