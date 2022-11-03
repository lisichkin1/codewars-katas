function animals(heads, legs){
    let chickenLegs = heads * 2
    let differenceLegs = legs - chickenLegs
    let cowsRes = differenceLegs/2//?
    let ChickenLegsRes = heads - cowsRes//?
    return heads == 0 && legs == 0 ? [0,0]:
            heads == 0 || legs == 0 || legs % 2 != 0 || ChickenLegsRes < 0 || cowsRes < 0? 
            "No solutions" : [ChickenLegsRes,cowsRes]
  }