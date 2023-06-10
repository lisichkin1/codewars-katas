function countSmileys(arr) {
    return arr.filter(item => /^(:|;)(-|~)?(\)|D)$/.test(item)).length;
  }
  
countSmileys([':)', ':(', ':-D', ':O', ':;']);
  
  