function fuelPrice(litres, pricePerLitre) {
    return Number(litres >= 2 && litres <=3 ? (litres * (pricePerLitre - 0.05)).toFixed(2) :
    litres >= 4 && litres <= 5 ? (litres * (pricePerLitre - 0.1)).toFixed(2) :
    litres >= 6 && litres <= 7 ? (litres * (pricePerLitre - 0.15)).toFixed(2) :  
    litres >= 8 && litres <= 9 ? (litres * (pricePerLitre - 0.20)).toFixed(2) :
    litres >= 10 ? (litres * (pricePerLitre - 0.25)).toFixed(2) : (litres * pricePerLitre).toFixed(2))
  }