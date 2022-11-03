//return price without vat
function excludingVatPrice(price){
    return price != null ? Number((price / 115 * 100).toFixed(2)) : -1;
  }
  excludingVatPrice = p => p === null ? -1 : +(p / 1.15).toFixed(2);