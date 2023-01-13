const sequenceSum = (begin, end, step) => {
    let i = 0;
    let stepSum = 0;
    let stepArr = [];
    if(begin > end){
        return 0;
    }
    while(i < end){
        if(stepArr[stepArr.length - 1] + step > end){
            break;
        } else if(i == 0){
            stepArr.push(stepSum += begin);
        } else if(i > 0){
            stepArr.push(stepSum += step);
        }
        i++;
    }
   
    return stepArr.reduce( (a, b) => a + b);
  };
  sequenceSum(2, 2, 2)