function isTriangle(a,b,c){
    if(a + b > c){
      if(a + c > b){
        if(b + c > a){
          return true;
        } else return false;
      } else return false;
     } else return false;
  }