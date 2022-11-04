function iceBrickVolume(radius, bottleLength, rimLength) {
    let sideCube = radius * 2/Math.sqrt(2)//?
    let differenceHigh = bottleLength - rimLength
    let volumeCube = differenceHigh * sideCube * sideCube
    return Math.round(volumeCube)
  }