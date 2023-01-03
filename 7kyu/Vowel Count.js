function getCount(str) {
    var vowelsCount = 0;
      let vowels = "aeiou";
      for(let i = 0; i < vowels.length; i++){
          for(let k = 0; k < str.length; k++){
              if(vowels[i] == str[k]){
                  vowelsCount++;
              }
          }
      }
      return vowelsCount;
  }