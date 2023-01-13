function removeUrlAnchor(url){
    return url.replace(/\#.*/, '');//?
  }
  removeUrlAnchor('www.codewars.com/katas/?page=1#about')