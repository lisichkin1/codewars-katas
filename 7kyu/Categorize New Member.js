function openOrSenior(data){
    let result = [];
    data.map(a => a[0] >= 55 && a[1] > 7 ? result.push('Senior'): result.push('Open'))
    return result;
  }
  openOrSenior([[83,20],[85,7],[35,3],[89,3]]);