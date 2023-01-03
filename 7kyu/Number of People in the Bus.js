var number = function(busStops){
    return busStops.reduce(function (currentSum, currentNumber) {
        return currentSum + currentNumber[0] - currentNumber[1];
      }, 0);
}
  number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]);