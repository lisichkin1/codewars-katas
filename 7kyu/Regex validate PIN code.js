function validatePIN (pin) {
    let regexp = /[^\d]/g;
    return pin.length > 6 || pin.length < 4 || pin.length == 5 ? false : pin.match(regexp) ? false : true;
  }
  validatePIN('12345')//?