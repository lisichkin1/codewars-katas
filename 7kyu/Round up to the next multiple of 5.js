function roundToNext5(n){
    let percent = n % 10;
    if(n > 0){
        if(percent == 0 || percent == 5){
            return n;
        } else if(percent < 5){
            return n + 5 - percent;
        } else if(percent > 5){
            return n + 10 - percent;
        }
    } else if(n <= 0){
        return n - n % 5;
    }
}
  roundToNext5(0);