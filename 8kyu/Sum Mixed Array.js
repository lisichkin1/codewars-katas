function sumMix(x){
    return x.map(i=>Number(i)).reduce((a,b) => a+b);
  }
  sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'])//?
  
  //best
  const sumMix=x=>x.reduce((a,b)=>+b+a,0)