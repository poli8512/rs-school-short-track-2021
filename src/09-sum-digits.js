/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(num) {
  const str = `${num}`;
  let sum;
  const loop = (st) => {
    const s = st.split('').map((e) => +e);
    sum = s.reduce((a, c) => a + c);
    if (sum > 9) {
      loop(`${sum}`);
    }
    return +sum;
  };
  return loop(str);
}
module.exports = getSumOfDigits;
