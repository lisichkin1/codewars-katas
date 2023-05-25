function narcissistic(value) {
    return value == ('' + value).split('').map((num, index, arr)=> Math.pow(Number(num), arr.length)).reduce( (num, acc) => num + acc, 0) 
  }
  narcissistic(153)//?