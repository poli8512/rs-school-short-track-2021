/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const res = [];
  const nAr = n.toString().split('');
  for (let i = 0; i < nAr.length; i++) {
    const copy = nAr.slice();
    copy.splice(i, 1);
    // newNum=nAr.splice(i,1)
    res.push(+copy.join(''));
  }
  return res.sort((a, b) => a - b)[res.length - 1];
}

module.exports = deleteDigit;
