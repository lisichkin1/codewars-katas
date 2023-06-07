function sortArray(array) {
    const sortOddArr = array.filter( a => a % 2 != 0).sort((a,b)=>a-b)
    const resultArr = []
    let counter = 0
    for (let index = 0; index < array.length; index++) {
        if(array[index] % 2 == 0){
            resultArr.push(array[index])
        }
        else{
            resultArr.push(sortOddArr[counter])
            counter++
        }
        
    }
    return resultArr
}
sortArray([ 1, 11, 2, 8, 3, 4, 5 ])