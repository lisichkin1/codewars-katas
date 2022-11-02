function pillars(numPill, dist, width) {
    return numPill === 1 ? 0 : Math.round((((numPill - 1) * dist) + (width/100 * numPill) - ((width/100)*2))*100)
  }