function expandedForm(num) {
    return (""+num).
    split('')
    .map(Number)
    .map((num, index, arr) => num * Math.pow(10, arr.length-1-index))
    .filter(num => num !== 0)
    .join(' + ')
}
expandedForm(70304)