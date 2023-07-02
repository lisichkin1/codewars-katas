function inArray(array1,array2){
    return array1.filter(str => array2.some(substring => substring.includes(str))).sort();
}
inArray(["arp", "live", "strong", "lik"], ["lively", "alive", "harp", "sharp", "armstrong"])