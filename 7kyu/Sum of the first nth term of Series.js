function SeriesSum(n){
    let arrayDigits = [];
    let a = 1;
    for(let i = 0; i < n; i++){
      arrayDigits.push(1/a);
      a += 3;
    }
    return arrayDigits.reduce((a, b) => a + b, 0).toFixed(2);
  }
  SeriesSum(2)