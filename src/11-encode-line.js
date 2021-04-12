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
  const strAr = str.split('');
  let reslt = '';

  for (let i = 0; i < strAr.length; i++) {
    let count = 1;
    let next = i + 1;

    while (strAr[next] === strAr[i] && next < strAr.length) {
      count++;
      next++;
    }
    i += count - 1;
    if (count === 1) {
      reslt += `${strAr[i]}`;
    } else {
      reslt += `${count}${strAr[i]}`;
    }
  }
  return reslt;
}

module.exports = encodeLine;
