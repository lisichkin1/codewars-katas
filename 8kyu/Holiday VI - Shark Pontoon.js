function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    let shakrTime = sharkDistance/sharkSpeed
    let youTime = pontoonDistance/youSpeed
    if(dolphin == true){
        shakrTime = shakrTime * 2
    }
    if(shakrTime < youTime){
        return 'Shark Bait!'    
    }
    else return 'Alive!'
}
