function NumeroPrimo(numero) {
    if(numero < 2) {
      return false;
    }
    for(let j = 2; i <= numero/2; j++) {
      if(numero % j === 0) {
        return false;
      }
    }
    return true;
  }