let binarySeatch = (list, item) => {
    let low = 0;
    let high = list.length - 1;

    while(low <= high){
        let mid = Math.floor((low + high)/2);
        let guess = list[mid];
        if(guess == item){
            return mid;
        } else if(guess > item ){
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    } 
    return null;
    
}
binarySeatch([1,2,3,4,5,6,7,8,9], 8)/*?.*/

let searchirem = (list2, item2) => {
    return list2.indexOf(item2);
}
searchirem([1,2,3,4,5,6,7,8,9], 8)/*?.*/
