function isPrime(num) {
    if(num == 2){
        return true
    }
    if(num % 2 == 0 || num < 2){
        return false
    }
    for (let index = 3;index <= Math.ceil(Math.sqrt(num)); index+=2) {
        if(num % index == 0){
            return false
        }
    }
    return true
}
isPrime(0)