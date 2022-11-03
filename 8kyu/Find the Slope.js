const slope = points => {
    const resFun = (points[3] - points[1])/(points[2]-points[0])
    return isFinite(resFun) ? `${resFun}` : 'undefined'
  }