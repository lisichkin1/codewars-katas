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
//Try looking at your sort functions, if you used .sort() instead of .sort((a,b)=>a-b) it will pass the first test but not the second, this is becuase without parameters .sort() doesn't deal satisfactory with negative values

