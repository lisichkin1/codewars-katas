function divisors(integer) {
    let arr =[]
    for(i=2; i< integer;i++){
          if(integer%i==0){
              arr.push(i)
          }
      }
      return arr.length ? arr : integer + ' is prime'
  }
  divisors(13)//?