function gimme (triplet) {
    let cloneArray = triplet.slice(0)//?
    return triplet.indexOf(cloneArray.sort((a, b) => a- b)[1])//?
}
gimme([2, 3, 1])