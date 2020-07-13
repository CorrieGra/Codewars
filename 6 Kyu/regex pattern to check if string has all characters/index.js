function regexContainsAll(str) {
  let regEx = str.split('').map(v => `(?=.*[${v}])`).join('');
  return new RegExp(`^${regEx}`);
}