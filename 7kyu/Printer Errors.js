function printerError(s) {
  
    let counter = 0;
    let alphabet = ['n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y','z'];
    s.split('').sort();
      for(let x in s) {
        for(let y in alphabet){
          if(s[x] == alphabet[y]){
            counter += 1;
          } else counter += 0;
        }
      }
   
    return counter + '/' + s.length;
  }
  printerError('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz')//?
  
  
  //лучшее решение
  
  function printerError(s) {
    // your code
    var count = 0;
    for(var i = 0; i < s.length; i++) {
      if (s[i] > "m") {
        count++;
      }
    }
    return count+"/"+s.length;
  }