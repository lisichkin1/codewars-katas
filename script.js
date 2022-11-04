function isPythagoreanTriple(integers) {
  let sortArr = integers.sort((a, b) => a - b)
  return sortArr[0]**2 + sortArr[1]**2 == sortArr[2]**2 ? true : false;
}
isPythagoreanTriple([15275, 12220, 9165])//?