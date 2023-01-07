function minMax(arr){
    return [Math.min(this, arr), Math.max.apply(this, arr)];
  }
  minMax([1, 2, 3, 4, 5]);

  //best
  function minMax(arr){
    return [Math.min(...arr), Math.max(...arr)];
  }