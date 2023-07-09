function wave(str) {
  return Array.from(str, (char, index) => {
    if (char !== ' ') {
      const wavedStr = str.slice(0, index) + char.toUpperCase() + str.slice(index + 1);
      return wavedStr;
    }
    return str;
  }).filter((item) => item !== str);
}

console.log(wave('codewars'));
