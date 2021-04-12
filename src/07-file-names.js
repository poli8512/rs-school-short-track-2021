/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const objNames = {};
  const result = [];
  const putRes = (el) => {
    Object.keys(objNames).forEach((key) => {
      if (el === key) {
        result.push(`${key}(${objNames[key] - 1})`);
      }
      // console.log(result)
    });
  };
  const check = (el) => {
    let hasE = false;
    Object.entries(objNames).forEach((e) => {
      if (el === e[0]) { // был ли уже элемент
        hasE = true;
        objNames[el] = e[1] + 1;
        putRes(el);
      }
    });
    if (!hasE) { // если его не было раньше
      if (result.includes(el)) { // было ли такое же название в итоговом массиве
        objNames[el] = 2;
        result.push(`${el}(1)`);
      } else {
        objNames[el] = 1;
        result.push(`${el}`);
      }
    }
  };
  for (let i = 0; i < names.length; i++) {
    check(names[i]);
  }
  return result;
}

module.exports = renameFiles;
