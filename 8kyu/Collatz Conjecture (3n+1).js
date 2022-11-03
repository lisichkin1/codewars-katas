var hotpo = function(n){
    let counter = 0
    while(n > 1){
        if(n % 2 == 0){
          n = n /2;
          counter += 1;
        }
        else {
          n = n * 3 + 1;
          counter += 1;
        } 
      }
      return counter
    }