function disemvowel(str) {
    let strVol = str.split('')//?
      let vowels = "aeiou";
      for(let i = 0; i < vowels.length; i++){
          for(let k = 0; k < strVol.length; k++){
              if(vowels[i] == strVol[k] || vowels[i].toUpperCase() == strVol[k]){
                  strVol[k] = '';
              } 
          }
      }
      return strVol.join('');
  }
  disemvowel('This websitE Is for losers LOL!')//?