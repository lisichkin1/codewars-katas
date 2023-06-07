function towerBuilder(nFloors) {
    const resArr = [];
    let count = nFloors - 1;
    for (let index = 0; index < nFloors; index++) {
      const item = " ".repeat(count) + "*".repeat(index * 2 + 1) + " ".repeat(count);
      resArr.push(item);
      count = count - 1;
    }
    return resArr;
  }
  
  console.log(towerBuilder(6));