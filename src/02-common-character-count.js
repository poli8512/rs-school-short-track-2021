/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = '';
  const secondStr = s2.split('');

  function check(el, str = secondStr) {
    for (let i = 0; i < str.length; i++) {
      if (el === str[i]) {
        str.splice(i, 1);
        count += el;
        return;
      }
    }
  }
  s1.split('').forEach((s1el) => {
    check(s1el);
  });
  return count.length;
}

module.exports = getCommonCharacterCount;
