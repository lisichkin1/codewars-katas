const quarterOf = (month) => {
    return month <= 3 ? 1 :
    month <= 6 ? 2 :
    month <= 9 ? 3 :
    month <= 12 ? 4 : 0
}