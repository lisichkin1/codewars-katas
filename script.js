function countPositivesSumNegatives(input) {
  let positives = 0;
  let negative = 0;
  if(input == null || input.length < 1){
    return []
  }
  else{
    input.map((count)=> count > 0 ? positives++ : negative+=count)
    return [positives, negative]
  }
}
countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14])//?