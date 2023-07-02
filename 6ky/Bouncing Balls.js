function bouncingBall(h,  bounce,  window) {
    if (window < h && bounce>0 && bounce<1 && h > 0){
        let count = 0;
        for (let i = h; window < i; i = h){
            count+=1
            if(count>1){
                count+=1;
            }
            h *= bounce;
        }
        return count;
    }
    else return -1
    
  }
  bouncingBall(3.0, 0.66, 1.5)