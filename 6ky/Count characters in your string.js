function count(string) {
  return string.split('').reduce((accumulator, item) => {
    accumulator[item] = (accumulator[item] || 0) + 1;
    return accumulator;
  }, {});
}
count('ABC');
