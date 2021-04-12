/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Number}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(str) {
  const reg = /[(0-9)|(A-F)]/gm;
  const arrStr = str.split('-').join('').split('');
  const res = arrStr.every((el) => el.match(reg));
  return arrStr.length === 12 ? res : false;
}

module.exports = isMAC48Address;
