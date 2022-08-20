/*
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
*/
function bmi(weight, height) {
    let formula = weight/height**2
    return formula <= 18.5 ? 'Underweight' : formula <= 25.0 ? 'Normal' : formula <= 30.0 ? 'Overweight' : formula > 30.0 ? 'Obese' : false;
  }