function stray(numbers) {
    numbers.sort((a, b) => a - b);
    if(numbers[0] != numbers[1]){
        return numbers[0]
    } else return numbers[numbers.length - 1];
  }
  console.log(stray([1, 2, 1]))