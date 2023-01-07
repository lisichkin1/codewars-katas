var number=function(array){
    let resultarr = []
    for(let i=0; i<array.length; i++){
        resultarr.push(i+1 + ': ' + array[i]);
    }
    return resultarr
  }
  number(["a", "b", "c"])