var isAnagram = function(test, original) {
    let testArr = test.toLowerCase().split('');
    let originalArr = original.toLowerCase().split('');//?
    if(test.length != original.length){
        return false;
    }
    testArr.map( (a, index, arr) => originalArr.includes(a) ? originalArr.splice(originalArr.indexOf(a), 1): false);
    if(originalArr.length == 0){
        return true;
    } else return false;
};
isAnagram("apple", "pale");